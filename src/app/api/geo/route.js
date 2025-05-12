// src/app/api/geo/route.js
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    // Extrai o IP dos parâmetros da URL
    const { searchParams } = new URL(request.url);
    const ip = searchParams.get("ip");

    if (!ip) {
      return NextResponse.json({ error: "" }, { status: 400 });
    }

    // Campos que queremos da API
    const fields =
      "status,country,countryCode,regionName,city,zip,lat,lon,timezone,isp,org,proxy,mobile,hosting,as,query";

    // Chama a API HTTP do servidor (sem problema de HTTPS)
    const response = await fetch(
      `http://ip-api.com/json/${ip}?fields=${fields}`,
      {
        method: "GET",
        headers: {
          "User-Agent": "CelestialPet-Tracker/1.0",
        },
      }
    );

    if (!response.ok) {
      // throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();

    // Retorna os dados para o frontend
    return NextResponse.json(data);
  } catch (error) {
    // console.error('Erro na API Geo:', error);
    return NextResponse.json(
      {
        status: "fail",
        message: error.message,
      },
      { status: 500 }
    );
  }
}
