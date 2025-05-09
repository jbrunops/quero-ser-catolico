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
        title={`Santo Terço Católico - ${mysteryName} | Quero Ser Católico`}
        description={`Reze o Santo Terço online com os ${mysteryName}. Uma ferramenta para auxiliar sua oração e devoção mariana diária.`}
        keywords={`terço católico, terço online, ${mysteryName.toLowerCase()}, oração do terço, ave maria, pai nosso, rezar terço`}
        canonical="https://www.querosercatolico.com.br/terco"
        schemaType="WebPage"
        schemaData={{
          mainEntity: {
            "@type": "HowTo",
            "name": `Como Rezar o Santo Terço - ${mysteryName}`,
            "description": `Guia para rezar o Santo Terço Católico com os ${mysteryName}`,
            "step": [
              {
                "@type": "HowToStep",
                "name": "Sinal da Cruz",
                "text": "Faça o sinal da cruz e recite a oração inicial."
              },
              {
                "@type": "HowToStep",
                "name": "Meditação dos Mistérios",
                "text": `Medite sobre os cinco ${mysteryName} do dia.`
              },
              {
                "@type": "HowToStep",
                "name": "Dezenas",
                "text": "Para cada mistério, reze um Pai Nosso, dez Ave-Marias e um Glória ao Pai."
              },
              {
                "@type": "HowToStep",
                "name": "Oração Final",
                "text": "Finalize com a Salve Rainha e o Sinal da Cruz."
              }
            ]
          }
        }}
      />
      <PrayerBase 
        mode="terco"
        mysterySets={[mysteryType]}
        showHeader={false}
        showFooter={false}
      />
    </>
  );
};

export default PrayerApp;
