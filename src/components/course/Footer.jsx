import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 py-8">
      <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Destrave sua Carreira. Todos os direitos reservados.</p>
        <div className="mt-4">
          <a href="#" className="hover:text-white transition-colors mx-2">Política de Privacidade</a>
          <span className="mx-1">|</span>
          <a href="#" className="hover:text-white transition-colors mx-2">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;