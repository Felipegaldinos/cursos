import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Lock } from 'lucide-react';

const Offer = ({ scrollToForm }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Nome é obrigatório.';
    if (!formData.email.trim()) errors.email = 'E-mail é obrigatório.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'E-mail inválido.';
    if (!formData.phone.trim()) errors.phone = 'Telefone é obrigatório.';
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setFormErrors({});
    setFormData({ name: '', email: '', phone: '' });
    
    toast({
      title: "Inscrição enviada com sucesso!",
      description: "Obrigado! Em breve você receberá mais informações no seu e-mail.",
    });
  };

  return (
    <section id="inscricao" className="section-padding bg-gray-900">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">Sua Vaga com Condição Especial</h2>
            <p className="text-gray-400 text-lg mb-8">
              Acesso completo a todo o conteúdo, bônus e atualizações futuras por um preço que não se repetirá.
            </p>
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 text-center">
              <p className="text-gray-400 line-through text-2xl">De R$ 997,00</p>
              <p className="text-white font-bold text-3xl mb-2">por apenas 12x de</p>
              <p className="text-7xl font-extrabold text-orange-500 mb-4">R$ 49,90</p>
              <p className="text-gray-300 mb-8">(ou R$ 497,00 à vista)</p>
              <button onClick={scrollToForm} className="btn-cta btn-primary-cta">
                Quero me inscrever agora
              </button>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-400"><span className="font-bold text-green-400">Garantia de 7 dias:</span> seu risco é zero. Se não gostar, devolvemos seu dinheiro.</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 p-8 md:p-12 rounded-xl border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-white text-center mb-6">Preencha para começar</h3>
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="form-label">Nome Completo</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-input" required />
                  {formErrors.name && <p className="form-error">{formErrors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="form-label">Seu melhor e-mail</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input" required />
                  {formErrors.email && <p className="form-error">{formErrors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="form-label">Telefone / WhatsApp</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="form-input" required />
                  {formErrors.phone && <p className="form-error">{formErrors.phone}</p>}
                </div>
              </div>
              <button type="submit" className="btn-cta btn-primary-cta mt-8">
                Começar agora
              </button>
              <p className="text-center text-gray-500 text-sm mt-4 flex items-center justify-center">
                <Lock className="w-4 h-4 mr-2" /> Seus dados estão 100% seguros.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Offer;