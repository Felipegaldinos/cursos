import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const modules = [
  { title: "Módulo 1: Autoconhecimento e Definição de Metas", description: "Descubra seus pontos fortes e defina metas de carreira claras e alcançáveis." },
  { title: "Módulo 2: Marketing Pessoal e Networking", description: "Aprenda a construir sua marca pessoal e a criar conexões valiosas." },
  { title: "Módulo 3: Habilidades do Futuro (Soft Skills)", description: "Desenvolva as competências mais procuradas pelas empresas." },
  { title: "Módulo 4: Produtividade e Gestão do Tempo", description: "Técnicas para otimizar seu tempo e entregar mais resultados." },
  { title: "Módulo 5: Negociação e Comunicação Assertiva", description: "Domine a arte de negociar salários, promoções e projetos." },
  { title: "Módulo 6: Preparação para Entrevistas", description: "Esteja pronto para se destacar em qualquer processo seletivo." },
];

const Modules = () => {
  return (
    <section className="section-padding bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">O que você vai aprender?</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Um currículo completo para transformar sua vida profissional, do planejamento à execução.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CheckCircle className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">{module.title}</h3>
              <p className="text-gray-400">{module.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;