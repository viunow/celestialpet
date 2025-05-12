"use client";

import { useEffect, useRef } from "react";

const VisitorTracker = () => {
  // const hasTracked = useRef(false);

  useEffect(() => {
    // Evita múltiplas execuções
    // if (hasTracked.current) return;

    const trackVisitor = async () => {
      try {
        // Detecta bots e crawlers básicos
        const isBot =
          /bot|crawl|spider|scraper|headless|googlebot|bingbot|slurp|yandex|baidu|duckduckbot|facebookexternalhit|twitterbot|linkedinbot|whatsapp|telegrambot/i.test(
            navigator.userAgent
          );
        if (isBot) {
          //console.log("Bot detectado, pulando tracking");
          return;
        }

        // Verifica se já foi registrado nesta sessão
        // const tracked = sessionStorage.getItem("visitor_tracked");
        // if (tracked) {
        //   //console.log("Visitante já rastreado nesta sessão");
        //   return;
        // }

        //console.log("Iniciando tracking do visitante...");

        // Obtém IP do servidor
        const ipResponse = await fetch("/api/client");
        if (!ipResponse.ok) {
          throw new Error(`Erro na API: ${ipResponse.status}`);
        }
        const { ip } = await ipResponse.json();
        //console.log("IP obtido:", ip);

        // Obtém dados de geolocalização
        let locationData = null;
        try {
          // Em desenvolvimento (localhost), vamos pular a geolocalização
          if (ip !== "localhost" && ip !== "127.0.0.1" && ip !== "::1") {
            //console.log("🔍 Obtendo geolocalização para IP:", ip);

            // URL da API com os campos específicos
            const fields =
              "status,country,countryCode,regionName,city,zip,lat,lon,timezone,isp,org,proxy,mobile,hosting,as,query";
            const apiUrl = `http://ip-api.com/json/${ip}?fields=${fields}`;
            //console.log("📞 Chamando API:", apiUrl);

            const geoResponse = await fetch(apiUrl);

            if (geoResponse.ok) {
              const geoData = await geoResponse.json();
              //console.log("✅ Dados de geolocalização:", geoData);

              if (geoData.status === "success") {
                locationData = {
                  country: geoData.country,
                  countryCode: geoData.countryCode,
                  region: geoData.regionName,
                  city: geoData.city,
                  zip: geoData.zip,
                  latitude: geoData.lat,
                  longitude: geoData.lon,
                  timezone: geoData.timezone,
                  isp: geoData.isp,
                  organization: geoData.org,
                  asNumber: geoData.as,
                  isProxy: geoData.proxy,
                  isMobile: geoData.mobile,
                  isHosting: geoData.hosting,
                  actualIP: geoData.query,
                };
              } else {
                //console.warn("⚠️ API retornou falha:", geoData);
              }
            } else {
              // console.error(
              //   "❌ Erro na API:",
              //   geoResponse.status,
              //   geoResponse.statusText
              // );
            }
          } else {
            //console.log("👨‍💻 Ambiente de desenvolvimento detectado (localhost)");
            // console.log(
            //   "📝 Para testar a geolocalização, acesse: http://ip-api.com/json/"
            // );
            //console.log("📧 Email será enviado sem dados de geolocalização");
          }
        } catch (error) {
          //console.warn("⚠️ Erro ao obter geolocalização:", error);
        }

        // Coleta informações do navegador
        const browserInfo = {
          userAgent: navigator.userAgent,
          language: navigator.language,
          screen: `${screen.width}x${screen.height}`,
          referrer: document.referrer || "Direct",
          platform: navigator.platform,
          onLine: navigator.onLine,
          cookieEnabled: navigator.cookieEnabled,
        };

        //console.log("Enviando dados para API...");

        // Envia dados para a API (corrigindo o endpoint)
        const response = await fetch("/api/visitor", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ip,
            location: locationData,
            browserInfo,
            timestamp: new Date().toISOString(),
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            `Erro na API: ${response.status} - ${
              errorData.message || errorData.error
            }`
          );
        }

        const result = await response.json();
        //console.log("Dados enviados com sucesso!", result);

        // Marca como rastreado nesta sessão
        // sessionStorage.setItem("visitor_tracked", "true");
        // hasTracked.current = true;
      } catch (error) {
        // console.error("Erro ao rastrear visitante:", error);
      }
    };

    // Adiciona delay para não bloquear o carregamento da página
    const timer = setTimeout(trackVisitor, 3000);

    return () => clearTimeout(timer);
  }, []);

  return null; // Componente invisível
};

export default VisitorTracker;
