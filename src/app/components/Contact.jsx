"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import ButtonContact from "./ButtonContact";

const Contact = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-celestial-beige">
      <div className="celestial-container flex flex-col items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="section-title text-center mx-auto">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-celestial-brown mx-auto mt-2 mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto">
            Estamos aqui para ajudar você neste momento difícil. Entre em
            contato conosco para mais informações sobre nossos serviços.
          </p>
        </motion.div>

        <ButtonContact />

        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
            className="bg-white p-6 rounded-[8px] shadow-md"
          >
            <h3 className="font-playfair text-2xl text-celestial-brown font-semibold mb-6">
              Envie uma Mensagem
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Nome
                  </label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    className="border-celestial-blue/30 focus:border-celestial-blue focus:ring-celestial-blue"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="border-celestial-blue/30 focus:border-celestial-blue focus:ring-celestial-blue"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium">
                  Telefone
                </label>
                <Input
                  id="phone"
                  placeholder="(00) 00000-0000"
                  className="border-celestial-blue/30 focus:border-celestial-blue focus:ring-celestial-blue"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Como podemos ajudar você?"
                  className="border-celestial-blue/30 focus:border-celestial-blue focus:ring-celestial-blue"
                />
              </div>

              <Button className="w-full bg-celestial-blue text-celestial-brown hover:bg-celestial-blue/80">
                Enviar Mensagem
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeInUp}
          >
            <h3 className="font-playfair text-2xl text-celestial-brown font-semibold mb-6">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              {contactInfos.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start p-4 bg-white rounded-[8px] shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="p-2 bg-celestial-blue/10 rounded-full mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-celestial-brown">
                      {item.title}
                    </h4>
                    <p>{item.info}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 p-6 bg-white rounded-[8px] shadow-md">
              <h4 className="font-playfair text-lg text-celestial-brown font-medium mb-4">
                Horário de Atendimento
              </h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Segunda à Sexta</span>
                  <span>8:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado</span>
                  <span>9:00 - 13:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingo e Feriados</span>
                  <span>Plantão</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
