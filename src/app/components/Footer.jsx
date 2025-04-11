"use client";

import React from "react";
import { Phone, Mail, Instagram } from "lucide-react";
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
            <p className="text-celestial-brown mb-4 max-w-xs">
              Confortando tutores na despedida de seus companheiros, com
              dignidade e respeito.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/celestialpetcaxias"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full text-celestial-blue hover:bg-opacity-90 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:contato@celestialpet.com.br"
                className="p-2 bg-white rounded-full text-celestial-blue hover:bg-opacity-90 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+5554996925823"
                className="p-2 bg-white rounded-full text-celestial-blue hover:bg-opacity-90 transition-colors"
                aria-label="Telefone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-playfair text-xl text-white mb-4">
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
              <li>
                <a
                  href="#depoimentos"
                  className="text-celestial-brown hover:text-white transition-colors"
                >
                  Depoimentos
                </a>
              </li>
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
            <h4 className="font-playfair text-xl text-white mb-4">Contato</h4>
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
