"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      quote:
        "O acolhimento e carinho que recebi da equipe da Celestial Pet no momento de despedida do meu cãozinho foi fundamental para eu lidar com a dor da perda.",
      author: "Maria L.",
      pet: "Tutora do Max",
    },
    {
      quote:
        "Poderia ter tudo um momento com meu cachorro antes da eutanásia, e foi exatamente isso que a Celestial Pet me proporcionou. Um momento digno de despedida.",
      author: "Carlos R.",
      pet: "Tutor do Thor",
    },
    {
      quote:
        "A lembrança que recebi com o pelo da minha gatinha é algo que guardo com muito carinho. Foi uma forma de mantê-la sempre perto de mim.",
      author: "Ana P.",
      pet: "Tutora da Luna",
    },
    {
      quote:
        "Quando perdi minha companheira de 14 anos, não sabia como lidar com a situação. O serviço de cerimônia de despedida me ajudou a ter um fechamento.",
      author: "Paula M.",
      pet: "Tutora da Belinha",
    },
  ];

  const nextTestimonial = () => {
    setCurrent((current + 1) % testimonials.length);
    setAutoplay(false);
  };

  const prevTestimonial = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrent((current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [current, autoplay, testimonials.length]);

  return (
    <section
      id="depoimentos"
      className="py-16 md:py-24 bg-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-celestial-blue rounded-full opacity-10 -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-celestial-beige rounded-full opacity-10 translate-y-1/3 -translate-x-1/3"></div>

      <div className="celestial-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-center mx-auto">
            O Que Dizem Sobre Nós
          </h2>
          <div className="w-24 h-1 bg-celestial-blue mx-auto mt-2 mb-6"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-celestial-blue shadow-md">
                <CardContent className="p-8 text-center">
                  <Quote className="w-10 h-10 text-celestial-blue mx-auto mb-6" />
                  <p className="text-lg md:text-xl mb-6 italic">
                    &quot;{testimonials[current].quote}&quot;
                  </p>
                  <div>
                    <p className="font-medium text-celestial-brown">
                      {testimonials[current].author}
                    </p>
                    <p className="text-sm text-celestial-brown/80">
                      {testimonials[current].pet}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  idx === current ? "bg-celestial-blue" : "bg-celestial-blue/30"
                }`}
                onClick={() => {
                  setCurrent(idx);
                  setAutoplay(false);
                }}
                aria-label={`Ir para depoimento ${idx + 1}`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-celestial-brown"
            onClick={prevTestimonial}
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <Button
            variant="ghost"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-celestial-brown"
            onClick={nextTestimonial}
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
