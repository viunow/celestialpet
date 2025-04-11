"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeartHandshake, Syringe, Star, Car } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const services = [
    {
      icon: <HeartHandshake className="w-12 h-12 text-celestial-blue" />,
      title: "Cerimônia de Despedida",
      description:
        "Ambiente decorado e climatizado para despedida do pet falecido, com espaço para homenagem através de fotos e vídeos, em um local de conforto para os familiares.",
      details: [
        "Espaço decorado com iluminação suave",
        "TV para exibição de fotos e vídeos",
        "Música ambiente",
        "Espaço para água, chá e café",
      ],
    },
    {
      icon: <Syringe className="w-12 h-12 text-celestial-blue" />,
      title: "Eutanásia Assistida",
      description:
        "Procedimento de eutanásia humanizada realizado com todo o cuidado e respeito, podendo ser executado em nossa empresa ou a domicílio.",
      details: [
        "Ambiente calmo e tranquilo",
        "Procedimento realizado por veterinário especializado",
        "Opção de acompanhamento dos tutores",
        "Realização na empresa ou domicílio",
      ],
    },
    {
      icon: <Star className="w-12 h-12 text-celestial-blue" />,
      title: "Encaminhamento para Cremação",
      description:
        "Oferecemos serviço de cremação terceirizado, cuidando de todos os procedimentos necessários para garantir que o processo seja realizado com dignidade.",
      details: [
        "Parceria com crematório especializado",
        "Opções de urnas para guarda das cinzas",
        "Documentação completa do processo",
        "Retorno das cinzas para o tutor",
      ],
    },
    {
      icon: <Car className="w-12 h-12 text-celestial-blue" />,
      title: "Recolhimento em Clínicas ou Domicílios",
      description:
        "Serviço de busca em clínicas veterinárias parceiras ou diretamente no domicílio para encaminhamento e realização de cerimônia de despedida.",
      details: [
        "Transporte adequado e respeitoso",
        "Atendimento rápido",
        "Flexibilidade de horários",
        "Discrição e profissionalismo",
      ],
    },
  ];

  return (
    <section id="servicos" className="py-16 md:py-24 bg-celestial-lightBeige">
      <div className="celestial-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="section-title text-center mx-auto">Nossos Serviços</h2>
          <div className="w-24 h-1 bg-celestial-blue mx-auto mt-2 mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Oferecemos uma variedade de serviços para garantir que a despedida
            do seu companheiro seja realizada com dignidade, respeito e carinho.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeInUp}
            >
              <Card className="h-full border-celestial-blue border overflow-hidden group">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-celestial-blue/10 rounded-full mr-4">
                      {service.icon}
                    </div>
                    <h3 className="font-playfair text-xl text-celestial-brown font-semibold">
                      {service.title}
                    </h3>
                  </div>

                  <p className="mb-4 flex-grow">{service.description}</p>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-celestial-blue/20"
                  >
                    <h4 className="text-celestial-brown font-medium mb-2">
                      O que incluímos:
                    </h4>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-celestial-blue rounded-full mt-2 mr-2"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
