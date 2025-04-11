import { Montserrat, Raleway, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

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
  title: "Celestial Pet | Homenagens e Cuidado Veterinário",
  description: "Traduzindo sentimentos em cuidado e homenagens!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          montserrat.variable,
          raleway.variable,
          playfair.variable,
          "antialiased font-manjari bg-white text-celestial-brown"
        )}
      >
        {children}
      </body>
    </html>
  );
}
