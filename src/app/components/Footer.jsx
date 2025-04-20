"use client";

import React from "react";
import { Phone, Mail, Instagram, MapPin } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-celestial-blue py-12">
      <div className="celestial-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo />
            <p className="text-celestial-brown my-4 max-w-xs">
              Traduzindo sentimentos e cuidado em homenagens!
              <br />
            </p>
          </div>

          <div>
            <h4 className="font-playfair text-xl text-celestial-brown mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#sobre"
                  className="text-celestial-brown hover:text-white transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-celestial-brown hover:text-white transition-colors"
                >
                  Nossos Serviços
                </a>
              </li>
              {/* <li>
                <a
                  href="#depoimentos"
                  className="text-celestial-brown hover:text-white transition-colors"
                >
                  Depoimentos
                </a>
              </li> */}
              <li>
                <a
                  href="#contato"
                  className="text-celestial-brown hover:text-white transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-xl text-celestial-brown mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Link
                  href="tel:+5554996925823"
                  className="flex items-center"
                  aria-label="Ligar para (54) 99692-5823"
                >
                  <Phone size={16} className="text-white mr-2" />
                  <span className="text-celestial-brown hover:text-white transition-colors">
                    (54) 99692-5823
                  </span>
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  href="mailto:contato@celestialpet.com.br"
                  className="flex items-center"
                  aria-label="Enviar email para contato@celestialpet.com.br"
                >
                  <Mail size={16} className="text-white mr-2" />
                  <span className="text-celestial-brown hover:text-white transition-colors">
                    contato@celestialpet.com.br
                  </span>
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  href="https://instagram.com/celestialpetcaxias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                  aria-label="Visitar perfil do Instagram @celestialpetcaxias"
                >
                  <Instagram size={16} className="text-white mr-2" />
                  <span className="text-celestial-brown hover:text-white transition-colors">
                    @celestialpetcaxias
                  </span>
                </Link>
              </li>
              <li className="flex items-start">
                <Link
                  href="https://maps.app.goo.gl/35T7kZRpjLjXw7hr9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start"
                  aria-label="Ver localização no Google Maps"
                >
                  <MapPin size={16} className="text-white mr-2 mt-1" />
                  <span className="text-celestial-brown hover:text-white transition-colors">
                    R. Tronca, 965 - Rio Branco, <br />
                    Caxias do Sul - RS, 95010-100
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-celestial-brown">
            © {year} Celestial Pet. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
