// src/app/api/client/route.js
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    // Lista de headers possíveis para IP real
    const ipHeaders = [
      "x-forwarded-for",
      "x-real-ip",
      "x-client-ip",
      "x-forwarded",
      "x-cluster-client-ip",
      "forwarded-for",
      "forwarded",
      "cf-connecting-ip", // Cloudflare
      "x-original-forwarded-for",
      "true-client-ip",
    ];

    let ip = null;

    // Debug: listar todos os headers recebidos
    //console.log("=== DEBUG HEADERS ===");
    for (const [key, value] of request.headers.entries()) {
      if (
        key.toLowerCase().includes("ip") ||
        key.toLowerCase().includes("forward")
      ) {
        //console.log(`${key}: ${value}`);
      }
    }

    // Procurar IP nos headers
    for (const header of ipHeaders) {
      const headerValue = request.headers.get(header);
      if (headerValue) {
        //console.log(`Found header ${header}: ${headerValue}`);

        // x-forwarded-for pode ter múltiplos IPs separados por vírgula
        if (header === "x-forwarded-for" && headerValue.includes(",")) {
          const ips = headerValue.split(",").map((ip) => ip.trim());
          // Pegar o primeiro IP da lista (cliente original)
          ip = ips[0];
          //console.log(`Multiple IPs found, using first: ${ip}`);
        } else {
          ip = headerValue.trim();
        }
        break;
      }
    }

    // Fallback para connection info se disponível
    if (!ip && request.ip) {
      ip = request.ip;
      //console.log(`Using request.ip: ${ip}`);
    }

    // Fallback para localhost durante desenvolvimento
    if (!ip || ip === "::1" || ip === "127.0.0.1") {
      ip = "localhost";
      //console.log("Using localhost fallback");
    }

    // Remove prefixo IPv6 se presente
    const cleanIP = ip.replace(/^::ffff:/, "");

    // Remove portas se presentes
    const finalIP = cleanIP.includes(":") ? cleanIP.split(":")[0] : cleanIP;

    //console.log(`Final IP: ${finalIP}`);

    return NextResponse.json({
      ip: finalIP,
      // Para debug: incluir informações adicionais
      debug: {
        rawHeaders: Object.fromEntries(
          [...request.headers.entries()].filter(
            ([key]) =>
              key.toLowerCase().includes("ip") ||
              key.toLowerCase().includes("forward")
          )
        ),
        detectedFrom: ip !== finalIP ? "processed" : "direct",
      },
    });
  } catch (error) {
    // console.error("Erro ao obter IP:", error);
    return NextResponse.json(
      {
        ip: "unknown",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
