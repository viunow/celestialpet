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

// We'll use custom font loading for Manjari and TT Ramillas
// (TT Ramillas would need to be loaded via next/font/local)

export const metadata = {
  title: "Celestial Pet | Homenagens e Cuidados Paliativos",
  description: "Traduzindo sentimentos em cuidado e homenagens!",
};

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
