import React from "react";
import { motion } from "framer-motion";
import { Heart, Star, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-celestial-blue" />,
      title: "Empatia",
      description:
        "Agimos com empatia e compreensão durante todo o processo de despedida.",
    },
    {
      icon: <Star className="w-8 h-8 text-celestial-blue" />,
      title: "Bem-estar",
      description:
        "O bem-estar dos pets está sempre em primeiro lugar nas nossas ações.",
    },
    {
      icon: <Shield className="w-8 h-8 text-celestial-blue" />,
      title: "Respeito",
      description: "Respeitamos o processo de luto de cada tutor e família.",
    },
  ];

  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="celestial-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="section-title text-center mx-auto">
            Sobre a Celestial Pet
          </h2>
          <div className="w-24 h-1 bg-celestial-brown mx-auto mt-2 mb-6"></div>
        </motion.div>

        <div className="w-full flex flex-col gap-4 text-lg">
          <h2 className="text-center">
            Localizada em Caxias do Sul, a Celestial Pet foi fundada com o
            objetivo de confortar tutores ao passar pela perda por falecimento
            de pets. Ressignificamos o processo de despedida, proporcionando
            dignidade, conforto e compaixão aos pets e seus tutores.
          </h2>
          <h2 className="text-center">
            Somos especializados em cuidados paliativos para cães e gatos,
            visando o bem-estar, controle de dor e conforto.
          </h2>
        </div>
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
          >
            <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-celestial-brown mb-6">
              Nossa Missão
            </h3>
            <p className="text-lg mb-6">
              Confortar tutores ao passar pela perda por falecimento de pets.
              Criar últimas memórias, com empatia, conforto e respeito.
            </p>

            <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-celestial-brown mb-6">
              Nossa Visão
            </h3>
            <p className="text-lg mb-6">
              Ressignificar o processo fúnebre de cães e gatos. Fornecer
              dignidade aos pets e tutores, durante o processo de despedida,
              falecimento e homenagem.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeInUp}
            className="relative p-6 rounded-[8px] border border-celestial-blue"
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-4">
              <h3 className="font-playfair text-xl text-celestial-brown">
                Nossos Valores
              </h3>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="bg-white border border-celestial-blue/20 shadow-sm"
                >
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-celestial-blue/10 rounded-full">
                      {value.icon}
                    </div>
                    <h4 className="font-playfair text-lg font-medium mb-2">
                      {value.title}
                    </h4>
                    <p className="text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
