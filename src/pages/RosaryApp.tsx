import React from 'react';
import PrayerBase from '../components/PrayerBase';
import SEO from '@/components/SEO';

const RosaryApp = () => {
  return (
    <>
      <SEO 
        title="Santo Rosário Completo - Reze todos os Mistérios | Quero Ser Católico"
        description="Reze o Santo Rosário completo online com todos os Mistérios: Gozosos, Luminosos, Dolorosos e Gloriosos. Uma ferramenta para auxiliar sua devoção mariana."
        keywords="rosário completo, rosário católico, terço completo, mistérios do rosário, oração mariana, rosário online, rezar rosário"
        canonical="https://www.querosercatolico.com.br/rosario"
        schemaType="WebPage"
        schemaData={{
          mainEntity: {
            "@type": "HowTo",
            "name": "Como Rezar o Santo Rosário Completo",
            "description": "Guia para rezar o Santo Rosário Católico completo com todos os mistérios",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Sinal da Cruz",
                "text": "Faça o sinal da cruz e recite a oração inicial."
              },
              {
                "@type": "HowToStep",
                "name": "Mistérios Gozosos",
                "text": "Medite sobre os cinco Mistérios Gozosos: Anunciação, Visitação, Nascimento de Jesus, Apresentação no Templo e Perda e Encontro de Jesus."
              },
              {
                "@type": "HowToStep",
                "name": "Mistérios Luminosos",
                "text": "Medite sobre os cinco Mistérios Luminosos: Batismo de Jesus, Bodas de Caná, Anúncio do Reino, Transfiguração e Instituição da Eucaristia."
              },
              {
                "@type": "HowToStep",
                "name": "Mistérios Dolorosos",
                "text": "Medite sobre os cinco Mistérios Dolorosos: Agonia no Horto, Flagelação, Coroação de Espinhos, Caminho da Cruz e Crucificação."
              },
              {
                "@type": "HowToStep",
                "name": "Mistérios Gloriosos",
                "text": "Medite sobre os cinco Mistérios Gloriosos: Ressurreição, Ascensão, Pentecostes, Assunção de Maria e Coroação de Maria."
              }
            ]
          }
        }}
      />
      <PrayerBase 
        mode="rosario"
        mysterySets={['joyful', 'luminous', 'sorrowful', 'glorious']}
        showHeader={false}
        showFooter={false}
      />
    </>
  );
};

export default RosaryApp; 