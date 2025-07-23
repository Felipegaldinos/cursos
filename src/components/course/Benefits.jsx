import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Infinity as InfinityIcon, Gift } from 'lucide-react';

const benefits = [
  { icon: <Users className="w-8 h-8 text-orange-500" />, text: "Aprenda com especialistas do mercado" },
  { icon: <Award className="w-8 h-8 text-orange-500" />, text: "Certificado reconhecido para seu currículo" },
  { icon: <InfinityIcon className="w-8 h-8 text-orange-500" />, text: "Acesso vitalício ao conteúdo e atualizações" },
  { icon: <Gift className="w-8 h-8 text-orange-500" />, text: "Bônus exclusivos para acelerar seus resultados" },
];

const Benefits = () => {
  return (
    <section className="bg-gray-800 section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img  class="w-full h-auto object-cover rounded-xl shadow-lg" alt="Estudante focado assistindo a uma aula online em seu laptop" src="https://images.unsplash.com/photo-1598737129494-69cb30f96a73" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 bg-gray-700 p-3 rounded-full">
                    {benefit.icon}
                  </div>
                  <span className="text-lg text-gray-200">{benefit.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;