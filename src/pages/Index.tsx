
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prayer-card mb-12 text-center">
            <h1 className="text-5xl font-bold text-vatican-dark mb-4">
              Rezar em Luz
            </h1>
            <p className="text-xl text-vatican-dark/80 mb-8">
              Um guia interativo para suas orações diárias
            </p>
            <div className="w-20 h-1 bg-vatican-gold mx-auto mb-8"></div>
            <p className="mb-6 text-vatican-dark/70">
              "A oração é a elevação da alma a Deus ou a petição a Deus de bens 
              convenientes." - São João Damasceno
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="prayer-card hover:shadow-xl hover:-translate-y-1 transition-all">
              <h2 className="text-2xl font-semibold text-vatican-dark mb-4">Santo Terço</h2>
              <p className="text-vatican-dark/80 mb-8">
                O terço é uma forma simplificada do Rosário, composto por 5 dezenas 
                de Ave-Marias precedidas por um Pai-Nosso cada.
              </p>
              <img 
                src="https://via.placeholder.com/400x200?text=Santo+Terço" 
                alt="Santo Terço" 
                className="rounded-md mb-6 w-full object-cover h-40"
              />
              <div className="flex justify-center">
                <Link to="/terco">
                  <Button className="prayer-btn">
                    Rezar o Terço
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="prayer-card hover:shadow-xl hover:-translate-y-1 transition-all">
              <h2 className="text-2xl font-semibold text-vatican-dark mb-4">Rosário Completo</h2>
              <p className="text-vatican-dark/80 mb-8">
                O Rosário completo é composto por 20 dezenas divididas entre os 
                mistérios Gozosos, Dolorosos, Gloriosos e Luminosos.
              </p>
              <img 
                src="https://via.placeholder.com/400x200?text=Rosário+Completo" 
                alt="Rosário Completo" 
                className="rounded-md mb-6 w-full object-cover h-40"
              />
              <div className="flex justify-center">
                <Link to="/rosario">
                  <Button className="prayer-btn">
                    Rezar o Rosário
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="prayer-card mt-12">
            <h2 className="text-2xl font-semibold text-vatican-dark mb-4">
              Sobre a Oração do Santo Terço
            </h2>
            <p className="text-vatican-dark/80 mb-4">
              O Santo Terço é uma poderosa oração mariana que nos ajuda a meditar sobre 
              os mistérios da vida de Jesus Cristo. É uma forma de contemplação e 
              intercessão muito estimada pela Igreja Católica.
            </p>
            <p className="text-vatican-dark/80 mb-4">
              Com este guia interativo, você poderá rezar o terço de forma guiada, 
              contemplando os mistérios adequados para cada dia da semana, conforme 
              a tradição da Igreja.
            </p>
            <blockquote className="border-l-4 border-vatican-gold pl-4 italic text-vatican-dark/70 my-6">
              "O Rosário é a oração que acompanha a minha vida; é também a oração 
              dos simples e dos santos… é a oração do meu coração."
              <footer className="text-right mt-2">— São João Paulo II</footer>
            </blockquote>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
