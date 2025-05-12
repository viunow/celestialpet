"use client";

import { useEffect, useRef } from "react";

const Visitor = () => {
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
          return;
        }

        // Gerar identificador único para esta sessão
        let sessionId = sessionStorage.getItem("session_id");
        if (!sessionId) {
          sessionId = crypto.randomUUID();
          sessionStorage.setItem("session_id", sessionId);
        }

        // Gerar identificador único do visitante (persistente entre sessões)
        let visitorId = localStorage.getItem("visitor_id");
        if (!visitorId) {
          visitorId = crypto.randomUUID();
          localStorage.setItem("visitor_id", visitorId);
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
            return;
          }
        }

        // Obtém IP do servidor
        const ipResponse = await fetch("/api/client");
        if (!ipResponse.ok) {
          // throw new Error(`Erro na API: ${ipResponse.status}`);
        }
        const { ip, debug } = await ipResponse.json();

        // Obtém dados de geolocalização
        let locationData = null;
        try {
          const apiUrl = `/api/geo?ip=${ip}`;
          const geoResponse = await fetch(apiUrl);

          if (geoResponse.ok) {
            const geoData = await geoResponse.json();

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
            }
          }
        } catch (error) {
          // console.warn("⚠️ Erro ao obter geolocalização:", error);
        }

        const browserInfo = {
          userAgent: navigator.userAgent,
          language: navigator.language,
          languages: navigator.languages,
          screen: `${screen.width}x${screen.height}`,
          colorDepth: screen.colorDepth,
          pixelDepth: screen.pixelDepth,
          referrer: document.referrer || "Direct",
          platform: navigator.platform,
          onLine: navigator.onLine,
          cookieEnabled: navigator.cookieEnabled,
          doNotTrack: navigator.doNotTrack,
          hardwareConcurrency: navigator.hardwareConcurrency,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          viewport: `${window.innerWidth}x${window.innerHeight}`,
        };

        const visitCount =
          parseInt(localStorage.getItem("visit_count") || "0") + 1;
        localStorage.setItem("visit_count", visitCount.toString());

        const response = await fetch("/api/visitor", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ip,
            location: locationData,
            browserInfo,
            sessionId,
            visitorId,
            visitCount,
            isReturningVisitor: visitCount > 1,
            ipDetectionDebug: debug,
            timestamp: new Date().toISOString(),
            pageUrl: window.location.href,
            pageTitle: document.title,
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

export default Visitor;
