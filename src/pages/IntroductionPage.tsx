import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const IntroductionPage = () => {
  return (
    <div className="container mx-auto px-4 py-6 md:py-8 max-w-4xl">
      <div className="text-center mb-4 md:mb-6">
        <h1 className="text-2xl md:text-4xl font-bold text-primary-700 mb-3 md:mb-4">
          Bem-vindo à Oração do Terço
        </h1>
        <div className="flex justify-center mb-3 md:mb-5">
          <img src="/rezando-o-terco-logo-sembg.svg" alt="Rezando o Terço" className="w-20 h-20 md:w-28 md:h-28" />
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-6 mb-8">
          <Link to="/terco" className="w-full md:w-auto">
            <Button className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white font-medium text-base md:text-lg py-4 md:py-5 px-6 md:px-8 shadow-md group">
              Rezar O Santo Terço
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/rosario" className="w-full md:w-auto">
            <Button className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white font-medium text-base md:text-lg py-4 md:py-5 px-6 md:px-8 shadow-md group">
              Rezar O Santo Rosário
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm shadow-md rounded-lg p-4 md:p-6 mb-5 md:mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-primary-700 mb-3 md:mb-4">
          A Importância do Terço na Vida Católica
        </h2>
        <div className="space-y-3 md:space-y-4 text-sm md:text-base text-primary-800/80">
          <p>
            O Santo Terço é uma das devoções mais poderosas da Igreja Católica. Através dele, meditamos sobre os mistérios da vida, morte e ressurreição de Jesus Cristo na companhia de Maria.
          </p>
          <p>
            Esta oração tem sido recomendada por papas, santos e pela própria Nossa Senhora em diversas aparições, como em Fátima, onde pediu que rezássemos o terço todos os dias pela paz do mundo.
          </p>
          <p>
            Ao rezar o terço, não apenas honramos Maria, mas também somos conduzidos por ela até Jesus, pois, como disse São Luís Maria Grignion de Montfort: <em>"Maria é o caminho mais seguro, mais curto e mais perfeito para ir a Jesus."</em>
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-b from-primary-100 to-primary-50 backdrop-blur-sm rounded-xl p-4 md:p-6 mb-5 md:mb-8 shadow-md border border-primary/20">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-primary-200 flex items-center justify-center mr-4 shadow-sm">
            <img src="/logo-sem-nome.svg" alt="Logo" className="w-6 h-6" />
          </div>
          <h2 className="text-xl md:text-2xl font-semibold text-primary-700">
            Terço ou Rosário?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
          <div className="bg-white/90 rounded-xl p-5 md:p-6 shadow-md border-t-4 border-primary transition-all hover:shadow-lg hover:-translate-y-1">
            <h3 className="text-lg md:text-xl font-semibold text-primary-700 mb-3">O Terço</h3>
            <div className="w-12 h-1 bg-primary/60 rounded-full mb-4"></div>
            <p className="text-sm md:text-base text-primary-800/80 mb-3 md:mb-4">
              O Terço é composto por cinco dezenas (uma parte do Rosário), onde meditamos nos mistérios do dia específico, seguindo o calendário da Igreja.
            </p>
          </div>
          
          <div className="bg-white/90 rounded-xl p-5 md:p-6 shadow-md border-t-4 border-primary transition-all hover:shadow-lg hover:-translate-y-1">
            <h3 className="text-lg md:text-xl font-semibold text-primary-700 mb-3">O Rosário Completo</h3>
            <div className="w-12 h-1 bg-primary/60 rounded-full mb-4"></div>
            <p className="text-sm md:text-base text-primary-800/80 mb-3 md:mb-4">
              O Rosário completo inclui os quatro conjuntos de mistérios: Gozosos, Luminosos, Dolorosos e Gloriosos, totalizando 20 mistérios.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionPage; 