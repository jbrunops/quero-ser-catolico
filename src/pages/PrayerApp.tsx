import React from 'react';
import PrayerBase from '../components/PrayerBase';
import { getMysteryOfTheDay, getMysteryTitle } from '../utils/prayers';
import SEO from '@/components/SEO';

const PrayerApp = () => {
  const mysteryType = getMysteryOfTheDay();
  const mysteryName = getMysteryTitle(mysteryType);
  
  return (
    <>
      <SEO 
        title={`Como Rezar o Santo Terço Online - ${mysteryName} | Guia Passo a Passo Católico`}
        description={`Aprenda como rezar o santo terço católico online com os ${mysteryName}. Guia completo passo a passo, orações tradicionais, Ave-Maria, Pai Nosso e meditação dos mistérios. Plataforma católica gratuita para sua devoção mariana diária.`}
        keywords={`como rezar o terço, rezar terço online, santo terço católico, ${mysteryName.toLowerCase()}, aprenda rezar terço, terço online grátis, oração do terço, ave maria, pai nosso, glória ao pai, como fazer o terço, passo a passo terço, guia terço católico, mistérios do terço, devoção mariana, nossa senhora, terço passo a passo, rezar terço passo a passo`}
        canonical="https://www.querosercatolico.com.br/terco"
        schemaType="WebPage"
        schemaData={{
          mainEntity: {
            "@type": "HowTo",
            "name": `Como Rezar o Santo Terço Católico - ${mysteryName}`,
            "description": `Guia completo passo a passo para aprender como rezar o Santo Terço Católico com os ${mysteryName}. Inclui todas as orações tradicionais e meditação dos mistérios.`,
            "totalTime": "PT20M",
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "BRL",
              "value": "0"
            },
            "supply": [
              {
                "@type": "HowToSupply",
                "name": "Terço ou Rosário Católico"
              },
              {
                "@type": "HowToSupply", 
                "name": "Local silencioso para oração"
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
                "name": "Preparação para a Oração",
                "text": "Encontre um local silencioso e faça o Sinal da Cruz para iniciar a oração do Santo Terço.",
                "url": "https://www.querosercatolico.com.br/terco#preparacao"
              },
              {
                "@type": "HowToStep", 
                "name": "Oração Inicial",
                "text": "Recite o Creio em Deus Pai, um Pai Nosso, três Ave-Marias e um Glória ao Pai.",
                "url": "https://www.querosercatolico.com.br/terco#oracao-inicial"
              },
              {
                "@type": "HowToStep",
                "name": "Meditação dos Mistérios",
                "text": `Medite sobre cada um dos cinco ${mysteryName} do dia, recitando um Pai Nosso, dez Ave-Marias e um Glória ao Pai para cada mistério.`,
                "url": "https://www.querosercatolico.com.br/terco#misterios"
              },
              {
                "@type": "HowToStep",
                "name": "Oração Final",
                "text": "Finalize com a Salve Rainha e faça o Sinal da Cruz para concluir o Santo Terço.",
                "url": "https://www.querosercatolico.com.br/terco#oracao-final"
              }
            ],
            "about": [
              {
                "@type": "Thing",
                "name": "Santo Terço Católico"
              },
              {
                "@type": "Thing", 
                "name": "Oração Mariana"
              },
              {
                "@type": "Thing",
                "name": "Devoção Católica"
              }
            ]
          }
        }}
      />
      <PrayerBase mode="terco" />
    </>
  );
};

export default PrayerApp;
