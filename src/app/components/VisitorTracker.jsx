"use client";

import { useEffect, useRef } from "react";

const VisitorTracker = () => {
  const hasTracked = useRef(false);

  useEffect(() => {
    // Evita múltiplas execuções
    if (hasTracked.current) return;

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
        const tracked = sessionStorage.getItem("visitor_tracked");
        const lastTracked = sessionStorage.getItem("last_tracked_time");

        if (tracked && lastTracked) {
          const currentTime = Date.now();
          const lastTime = parseInt(lastTracked);
          const timeDiff = currentTime - lastTime;

          // 2 horas em milissegundos: 2 * 60 * 60 * 1000 = 7200000
          if (timeDiff < 7200000) {
            //console.log("Visitante já rastreado nos últimos 2h");
            return;
          }
        }

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
          //console.log("🔍 Obtendo geolocalização para IP:", ip);

          // Usa a API proxy interna que não tem problema com HTTPS
          const apiUrl = `/api/geo?ip=${ip}`;
          //console.log("📞 Chamando API proxy:", apiUrl);

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

        // Envia dados para a API
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
          const errorData = await response.json().catch(() => ({}));
          // throw new Error(
          //   `Erro na API: ${response.status} - ${
          //     errorData.message || errorData.error
          //   }`
          // );
        }

        const result = await response.json();
        //console.log("Dados enviados com sucesso!", result);

        // Marca como rastreado nesta sessão com timestamp
        sessionStorage.setItem("visitor_tracked", "true");
        sessionStorage.setItem("last_tracked_time", Date.now().toString());
        hasTracked.current = true;
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
