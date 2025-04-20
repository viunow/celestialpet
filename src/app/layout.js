import { Montserrat, Raleway, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import WhatsappFloating from "./components/WhatsappFloating";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "900"],
});

export function generateMetadata() {
  return {
    title: "Celestial Pet | Homenagens e Cuidados Paliativos",
    description: "Traduzindo sentimentos em cuidado e homenagens!",
    metadataBase: new URL("https://www.celestialpet.com.br"),
    openGraph: {
      title: "Celestial Pet | Homenagens e Cuidados Paliativos",
      description: "Traduzindo sentimentos em cuidado e homenagens!",
      url: "https://www.celestialpet.com.br",
      siteName: "Celestial Pet",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "Celestial Pet - Homenagens e Cuidados Paliativos",
        },
      ],
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Celestial Pet | Homenagens e Cuidados Paliativos",
      description: "Traduzindo sentimentos em cuidado e homenagens!",
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Search Console Meta */}
        <meta
          name="google-site-verification"
          content="fFrwjVZhMU3OBP_GnEV55HuF2O7151rBq5bfdPaSfE8"
        />
        {/* Google Tag Manager Script */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TNBGWJKR');
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VeterinaryService",
              name: "Celestial Pet",
              description:
                "Serviços especializados de cuidados paliativos e homenagens para pets falecidos, traduzindo sentimentos em cuidado e homenagens.",
              url: "https://www.celestialpet.com.br",
              logo: "https://www.celestialpet.com.br/logo2-com-fundo.png",
              image: "https://www.celestialpet.com.br/og.png",
              telephone: "+55 54 996925823",
              email: "contato@celestialpet.com.br",
              address: {
                "@type": "PostalAddress",
                streetAddress: " R. Tronca, 965 - Rio Branco",
                addressLocality: "Caxias do Sul",
                addressRegion: "RS",
                postalCode: "95010-100",
                addressCountry: "BR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -29.1737281,
                longitude: -51.164309,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "13:00",
                },
              ],
              priceRange: "",
              areaServed: {
                "@type": "City",
                name: "Caxias do Sul",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Serviços Celestial Pet",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Homenagem de Despedida",
                      description:
                        "Ambiente exclusivo para realizar homenagens de despedida para pets falecidos. Oferecemos privacidade e todo o suporte necessário para esse momento delicado.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Eutanásia Humanizada",
                      description:
                        "Procedimento de eutanásia humanizada realizada por médico veterinário, seguindo as diretrizes éticas do Conselho Regional de Medicina Veterinária.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Encaminhamento para Cremação",
                      description:
                        "Oferecemos serviço de cremação terceirizado, cuidando de todos os procedimentos necessários para garantir que o processo seja realizado com agilidade e dignidade.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Busca em Clínicas ou Domicílios",
                      description:
                        "Serviço de busca em clínicas veterinárias parceiras ou diretamente no domicílio para a realização de homenagem de despedida.",
                    },
                  },
                ],
              },
              sameAs: ["https://www.instagram.com/celestialpetcaxias"],
            }),
          }}
        />
      </head>
      <body
        className={cn(
          montserrat.variable,
          raleway.variable,
          playfair.variable,
          "antialiased font-manjari bg-white text-celestial-brown"
        )}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TNBGWJKR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
        <WhatsappFloating />
        <Analytics />
      </body>
    </html>
  );
}
