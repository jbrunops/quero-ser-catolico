
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

const Rosario = () => {
  // Scroll para o topo quando a página carrega
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="prayer-card mb-10 text-center">
            <h1 className="rosary-heading">
              Rosário Completo
            </h1>
            <p className="text-lg text-vatican-dark/80 mb-8">
              O Rosário completo consiste na meditação dos 20 mistérios
            </p>
            
            <div className="bg-vatican-light/50 rounded-lg p-6 mb-8">
              <p className="text-vatican-dark/80 mb-4">
                O Rosário completo é composto por quatro terços, contemplando todos os 
                mistérios: Gozosos, Luminosos, Dolorosos e Gloriosos.
              </p>
              <p className="text-vatican-dark/80">
                Para rezar cada parte do Rosário, você pode utilizar o guia do Santo Terço, 
                selecionando o conjunto de mistérios que deseja contemplar.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Link 
                to="/terco" 
                className="prayer-card bg-vatican-light/30 hover:bg-vatican-light/50 transition-all"
                onClick={() => toast.info("Para rezar o rosário completo, reze cada conjunto de mistérios separadamente.")}
              >
                <h3 className="text-xl font-medium text-vatican-dark mb-2">Mistérios Gozosos</h3>
                <p className="text-vatican-dark/80 text-sm">
                  Contemplam a infância de Jesus
                </p>
              </Link>
              <Link 
                to="/terco" 
                className="prayer-card bg-vatican-light/30 hover:bg-vatican-light/50 transition-all"
                onClick={() => toast.info("Para rezar o rosário completo, reze cada conjunto de mistérios separadamente.")}
              >
                <h3 className="text-xl font-medium text-vatican-dark mb-2">Mistérios Luminosos</h3>
                <p className="text-vatican-dark/80 text-sm">
                  Contemplam a vida pública de Jesus
                </p>
              </Link>
              <Link 
                to="/terco" 
                className="prayer-card bg-vatican-light/30 hover:bg-vatican-light/50 transition-all"
                onClick={() => toast.info("Para rezar o rosário completo, reze cada conjunto de mistérios separadamente.")}
              >
                <h3 className="text-xl font-medium text-vatican-dark mb-2">Mistérios Dolorosos</h3>
                <p className="text-vatican-dark/80 text-sm">
                  Contemplam a Paixão e Morte de Jesus
                </p>
              </Link>
              <Link 
                to="/terco" 
                className="prayer-card bg-vatican-light/30 hover:bg-vatican-light/50 transition-all"
                onClick={() => toast.info("Para rezar o rosário completo, reze cada conjunto de mistérios separadamente.")}
              >
                <h3 className="text-xl font-medium text-vatican-dark mb-2">Mistérios Gloriosos</h3>
                <p className="text-vatican-dark/80 text-sm">
                  Contemplam a Ressurreição e Glória de Jesus
                </p>
              </Link>
            </div>
            
            <p className="text-vatican-dark/80 text-center">
              Tradicionalmente, os mistérios são distribuídos pelos dias da semana:
            </p>
            <ul className="text-left text-vatican-dark/80 mt-4 space-y-2 bg-vatican-light/30 p-4 rounded-md">
              <li>• <strong>Segunda-feira e Sábado:</strong> Mistérios Gozosos</li>
              <li>• <strong>Terça-feira e Sexta-feira:</strong> Mistérios Dolorosos</li>
              <li>• <strong>Quarta-feira e Domingo:</strong> Mistérios Gloriosos</li>
              <li>• <strong>Quinta-feira:</strong> Mistérios Luminosos</li>
            </ul>
          </div>
          
          <div className="text-center">
            <Link to="/terco">
              <Button className="prayer-btn">
                Ir para o Santo Terço
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Rosario;
