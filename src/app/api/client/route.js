// src/app/api/get-client-ip/route.js
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    // Obtém o IP do visitante
    const forwarded = request.headers.get("x-forwarded-for");
    const realIP = request.headers.get("x-real-ip");

    let ip = forwarded ? forwarded.split(",")[0] : realIP;

    // Fallback para localhost durante desenvolvimento
    if (!ip || ip === "::1" || ip === "127.0.0.1") {
      ip = "localhost";
    }

    // Remove prefixo IPv6 se presente
    const cleanIP = ip.replace(/^::ffff:/, "");

    return NextResponse.json({ ip: cleanIP });
  } catch (error) {
    //console.error("Erro ao obter IP:", error);
    return NextResponse.json({ ip: "unknown" }, { status: 500 });
  }
}
