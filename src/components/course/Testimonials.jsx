import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialsData = [
  {
    quote: "Este curso foi um divisor de águas na minha carreira. Consegui uma promoção em menos de 3 meses aplicando o que aprendi!",
    name: "Juliana Silva",
    title: "Gerente de Projetos",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
  },
  {
    quote: "Eu estava perdido, sem saber qual rumo tomar. O 'Destrave sua Carreira' me deu a clareza e as ferramentas que eu precisava. Recomendo demais!",
    name: "Carlos Pereira",
    title: "Desenvolvedor de Software",
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19"
  },
  {
    quote: "O conteúdo é prático e direto ao ponto. O módulo de negociação foi incrível e me ajudou a conseguir um aumento de 20%!",
    name: "Fernanda Costa",
    title: "Analista de Marketing",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };
  
  useEffect(() => {
    const timer = setTimeout(nextTestimonial, 5000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="bg-gray-800 section-padding">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-12">Quem fez, recomenda</h2>
        <div className="relative max-w-3xl mx-auto h-80 flex items-center justify-center">
          <button onClick={prevTestimonial} className="absolute left-0 -translate-x-12 p-2 rounded-full bg-gray-700 hover:bg-orange-500 transition-colors z-10">
            <ChevronLeft />
          </button>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <img src={testimonialsData[index].image} alt={testimonialsData[index].name} className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-orange-500" />
              <p className="text-lg lg:text-xl text-gray-300 italic mb-6">"{testimonialsData[index].quote}"</p>
              <div>
                <p className="font-bold text-white text-lg">{testimonialsData[index].name}</p>
                <p className="text-gray-400">{testimonialsData[index].title}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <button onClick={nextTestimonial} className="absolute right-0 translate-x-12 p-2 rounded-full bg-gray-700 hover:bg-orange-500 transition-colors z-10">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;