// src/app/api/geo/route.js
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const ip = searchParams.get("ip");

    if (!ip) {
      return NextResponse.json({ error: "IP não fornecido" }, { status: 400 });
    }

    // Token do IPinfo a partir da variável de ambiente
    const IPINFO_TOKEN = process.env.IPINFO_TOKEN;

    let locationData = null;
    let apiUsed = null;

    // Primeira tentativa: IPinfo (HTTPS) - só se o token estiver configurado
    if (IPINFO_TOKEN) {
      try {
        //console.log("🔍 Tentando IPinfo...");
        const ipinfoUrl = `https://ipinfo.io/${ip}?token=${IPINFO_TOKEN}`;

        const ipinfoResponse = await fetch(ipinfoUrl, {
          method: "GET",
          headers: {
            "User-Agent": "CelestialPet-Tracker/1.0",
          },
          signal: AbortSignal.timeout(5000), // 5 seconds timeout
        });

        if (ipinfoResponse.ok) {
          const ipinfoData = await ipinfoResponse.json();
          //console.log("✅ IPinfo funcionou!");

          // Transformar dados do IPinfo para o formato esperado
          locationData = {
            status: "success",
            country: ipinfoData.country,
            countryCode: ipinfoData.country,
            regionName: ipinfoData.region,
            city: ipinfoData.city,
            zip: ipinfoData.postal,
            lat: ipinfoData.loc
              ? parseFloat(ipinfoData.loc.split(",")[0])
              : null,
            lon: ipinfoData.loc
              ? parseFloat(ipinfoData.loc.split(",")[1])
              : null,
            timezone: ipinfoData.timezone,
            isp: ipinfoData.org,
            org: ipinfoData.org,
            as: ipinfoData.org,
            proxy: false, // IPinfo não fornece essa info diretamente
            mobile: false, // IPinfo não fornece essa info diretamente
            hosting: ipinfoData.org
              ? ipinfoData.org.toLowerCase().includes("hosting")
              : false,
            query: ipinfoData.ip,
          };

          apiUsed = "ipinfo";
        } else {
          // throw new Error(`IPinfo retornou ${ipinfoResponse.status}`);
        }
      } catch (ipinfoError) {
        //console.log("❌ IPinfo falhou:", ipinfoError.message);
        // Continue para o fallback
      }
    } else {
      //console.log("⚠️ Token IPinfo não configurado, usando IP-API diretamente");
    }

    // Segunda tentativa: IP-API.com (HTTP como fallback)
    if (!locationData) {
      try {
        //console.log("🔍 Tentando IP-API...");

        const fields =
          "status,country,countryCode,regionName,city,zip,lat,lon,timezone,isp,org,proxy,mobile,hosting,as,query";

        const ipapiUrl = `http://ip-api.com/json/${ip}?fields=${fields}`;

        const ipapiResponse = await fetch(ipapiUrl, {
          method: "GET",
          headers: {
            "User-Agent": "CelestialPet-Tracker/1.0",
          },
          signal: AbortSignal.timeout(5000),
        });

        if (ipapiResponse.ok) {
          locationData = await ipapiResponse.json();
          apiUsed = "ip-api";
          //console.log("✅ IP-API funcionou!");
        } else {
          // throw new Error(`IP-API retornou ${ipapiResponse.status}`);
        }
      } catch (ipapiError) {
        //console.log("❌ IP-API também falhou:", ipapiError.message);
        // throw new Error("Todas as APIs de geolocalização falharam");
      }
    }

    // Adicionar informações de debug
    if (locationData) {
      locationData.debug = {
        apiUsed,
        timestamp: new Date().toISOString(),
        originalIP: ip,
        ipinfoAvailable: !!IPINFO_TOKEN,
      };
    }

    return NextResponse.json(locationData);
  } catch (error) {
    console.error("Erro na API Geo:", error);
    return NextResponse.json(
      {
        status: "fail",
        message: error.message,
        error: error.name,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
