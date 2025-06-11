import React from 'react';
import PrayerBase from '../components/PrayerBase';
import SEO from '@/components/SEO';

const RosaryApp = () => {
  return (
    <>
      <SEO 
        title="Como Rezar o Santo Rosário Completo Online | Todos os Mistérios | Guia Católico"
        description="Aprenda como rezar o santo rosário católico completo online com todos os Mistérios: Gozosos, Luminosos, Dolorosos e Gloriosos. Guia passo a passo completo com orações tradicionais e meditação mariana."
        keywords="como rezar o rosário, rosário completo online, santo rosário católico, mistérios do rosário, como rezar terço completo, rosário católico online, aprenda rezar rosário, rosário online grátis, oração mariana, mistérios gozosos, mistérios dolorosos, mistérios gloriosos, mistérios luminosos, nossa senhora, devoção católica, ave maria, pai nosso, como fazer rosário"
        canonical="https://www.querosercatolico.com.br/rosario"
        schemaType="WebPage"
        schemaData={{
          mainEntity: {
            "@type": "HowTo",
            "name": "Como Rezar o Santo Rosário Católico Completo",
            "description": "Guia completo passo a passo para aprender como rezar o Santo Rosário Católico com todos os mistérios: Gozosos, Luminosos, Dolorosos e Gloriosos",
            "totalTime": "PT60M",
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "BRL",
              "value": "0"
            },
            "supply": [
              {
                "@type": "HowToSupply",
                "name": "Rosário Católico Completo"
              },
              {
                "@type": "HowToSupply", 
                "name": "Local silencioso para oração prolongada"
              }
            ],
            "tool": [
              {
                "@type": "HowToTool",
                "name": "Dispositivo com acesso à internet"
              }
            ],
            "step": [
              {
                "@type": "HowToStep",
                "name": "Preparação Inicial",
                "text": "Faça o Sinal da Cruz e recite as orações iniciais do Rosário.",
                "url": "https://www.querosercatolico.com.br/rosario#preparacao"
              },
              {
                "@type": "HowToStep",
                "name": "Primeiro Conjunto - Mistérios Gozosos",
                "text": "Medite sobre os cinco Mistérios Gozosos, recitando as orações tradicionais para cada mistério.",
                "url": "https://www.querosercatolico.com.br/rosario#misterios-gozosos"
              },
              {
                "@type": "HowToStep",
                "name": "Segundo Conjunto - Mistérios Luminosos", 
                "text": "Continue com os cinco Mistérios Luminosos da vida pública de Jesus.",
                "url": "https://www.querosercatolico.com.br/rosario#misterios-luminosos"
              },
              {
                "@type": "HowToStep",
                "name": "Terceiro Conjunto - Mistérios Dolorosos",
                "text": "Medite sobre os cinco Mistérios Dolorosos da Paixão de Cristo.",
                "url": "https://www.querosercatolico.com.br/rosario#misterios-dolorosos"
              },
              {
                "@type": "HowToStep",
                "name": "Quarto Conjunto - Mistérios Gloriosos",
                "text": "Finalize com os cinco Mistérios Gloriosos da Ressurreição e Glória.",
                "url": "https://www.querosercatolico.com.br/rosario#misterios-gloriosos"
              },
              {
                "@type": "HowToStep",
                "name": "Oração Final",
                "text": "Conclua com a Salve Rainha e as orações finais do Rosário.",
                "url": "https://www.querosercatolico.com.br/rosario#oracao-final"
              }
            ],
            "about": [
              {
                "@type": "Thing",
                "name": "Santo Rosário Católico"
              },
              {
                "@type": "Thing", 
                "name": "Mistérios Marianos"
              },
              {
                "@type": "Thing",
                "name": "Devoção Mariana Completa"
              }
            ]
          }
        }}
      />
      <PrayerBase mode="rosario" />
    </>
  );
};

export default RosaryApp; 