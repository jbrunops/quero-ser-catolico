import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';

const IntroductionPage = () => {
  return (
    <>
      <SEO 
        title="Como Rezar o Terço e Rosário Online | Aprenda Passo a Passo | Quero Ser Católico"
        description="Aprenda como rezar o terço e rosário católico online. Guia completo passo a passo com orações tradicionais, mistérios e devoção mariana. Plataforma católica gratuita para iniciar sua jornada de fé."
        keywords="como rezar o terço, rezar terço online, como rezar rosário, santo terço católico, rosário católico, aprenda rezar terço, terço online grátis, oração católica, ave maria, pai nosso, mistérios do terço, nossa senhora, devoção mariana, igreja católica, como fazer o terço, passo a passo terço, guia católico, orações tradicionais católicas"
        canonical="https://www.querosercatolico.com.br"
        schemaType="WebPage"
        schemaData={{
          mainEntity: {
            "@type": "WebPage",
            name: "Como Rezar o Terço e Rosário Online - Guia Católico Completo",
            description: "Portal católico dedicado a ensinar como rezar o terço e rosário passo a passo, com guias interativos e orações tradicionais da Igreja Católica",
            about: [
              {
                "@type": "Thing",
                "name": "Santo Terço Católico",
                "description": "Oração mariana tradicional da Igreja Católica"
              },
              {
                "@type": "Thing", 
                "name": "Santo Rosário",
                "description": "Oração completa com todos os mistérios marianos"
              },
              {
                "@type": "Thing",
                "name": "Educação Católica",
                "description": "Ensino das tradições e orações católicas"
              }
            ],
            potentialAction: [
              {
                "@type": "ReadAction",
                "target": "https://www.querosercatolico.com.br/terco",
                "name": "Aprender a Rezar o Santo Terço"
              },
              {
                "@type": "ReadAction", 
                "target": "https://www.querosercatolico.com.br/rosario",
                "name": "Aprender a Rezar o Santo Rosário"
              }
            ],
            mainContentOfPage: {
              "@type": "WebPageElement",
              "cssSelector": "main"
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Início",
                  "item": "https://www.querosercatolico.com.br"
                }
              ]
            }
          }
        }}
      />
      <div className="container mx-auto px-4 py-6 md:py-8 max-w-4xl">
        <div className="text-center mb-4 md:mb-6">
          <h1 className="text-2xl md:text-4xl font-bold text-primary-700 mb-3 md:mb-4">
            Bem-vindo ao Quero Ser Católico
          </h1>
          <div className="flex justify-center mb-3 md:mb-5">
            <img src="/quero-ser-catolico-logo.svg" alt="Quero Ser Católico" className="w-20 h-20 md:w-28 md:h-28" />
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
            A Importância da Fé Católica
          </h2>
          <div className="space-y-3 md:space-y-4 text-sm md:text-base text-primary-800/80">
            <p>
              Ser católico é viver uma rica tradição espiritual, alimentada por séculos de sabedoria, oração e comunhão com Deus e a Igreja.
            </p>
            <p>
              Nossa fé é fundamentada nas Sagradas Escrituras, na Tradição e no Magistério da Igreja, que nos guiam para uma vida plena em Cristo e nos convidam a vivenciar os sacramentos como encontros com a graça divina.
            </p>
            <p>
              Como disse São João Paulo II: <em>"Não tenham medo! Abram as portas a Cristo!"</em> Este site é dedicado a todos que desejam abrir as portas do coração para a beleza da fé católica.
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
    </>
  );
};

export default IntroductionPage; 