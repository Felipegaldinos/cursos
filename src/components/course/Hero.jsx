import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap } from 'lucide-react';

const Hero = ({ scrollToForm }) => {
  return (
    <section className="relative bg-gray-900 text-center section-padding overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-800/20 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
      <div className="relative z-10 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600 mb-4">
            Conquiste a Carreira Que Você Merece
          </h1>
          <p className="max-w-2xl mx-auto text-lg lg:text-xl text-gray-300 mb-8">
            O método passo a passo para você se tornar um profissional disputado pelo mercado e alcançar seus maiores objetivos.
          </p>
          <button onClick={scrollToForm} className="btn-cta btn-primary-cta">
            Garanta sua vaga agora
          </button>
          <div className="mt-8 flex justify-center items-center space-x-6 text-gray-400">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-green-400" />
              <span>100% Online</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span>Acesso Imediato</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;