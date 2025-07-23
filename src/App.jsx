import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/course/Hero';
import Benefits from '@/components/course/Benefits';
import Modules from '@/components/course/Modules';
import Testimonials from '@/components/course/Testimonials';
import Offer from '@/components/course/Offer';
import Footer from '@/components/course/Footer';

function App() {
  const scrollToForm = () => {
    const formSection = document.getElementById('inscricao');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Destrave sua Carreira - Conquiste o futuro que você merece</title>
        <meta name="description" content="Curso online para destravar sua carreira. Aprenda com especialistas, obtenha certificado e tenha acesso vitalício. Inscreva-se agora!" />
      </Helmet>
      <div className="bg-gray-900 text-white font-sans">
        <main>
          <Hero scrollToForm={scrollToForm} />
          <Benefits />
          <Modules />
          <Testimonials />
          <Offer scrollToForm={scrollToForm} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;