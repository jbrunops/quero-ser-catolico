// Tipos
export type Mystery = {
  title: string;
  description: string;
  type: 'joyful' | 'sorrowful' | 'glorious' | 'luminous';
};

export type PrayerStep = {
  id: string;
  title: string;
  description: string;
  prayerText?: string;
  type: 'instruction' | 'prayer';
  repetitions?: number;
};

// Funções para determinar os mistérios do dia
export const getMysteryOfTheDay = (): string => {
  const date = new Date();
  const day = date.getDay(); // 0 é Domingo, 1 é Segunda, etc.
  
  switch (day) {
    case 1: // Segunda-feira
    case 6: // Sábado
      return 'joyful';
    case 2: // Terça-feira
    case 5: // Sexta-feira
      return 'sorrowful';
    case 3: // Quarta-feira
    case 0: // Domingo
      return 'glorious';
    case 4: // Quinta-feira
      return 'luminous';
    default:
      return 'joyful';
  }
};

export const getDayOfWeekName = (): string => {
  const date = new Date();
  const day = date.getDay();
  
  switch (day) {
    case 0:
      return 'Domingo';
    case 1:
      return 'Segunda-feira';
    case 2:
      return 'Terça-feira';
    case 3:
      return 'Quarta-feira';
    case 4:
      return 'Quinta-feira';
    case 5:
      return 'Sexta-feira';
    case 6:
      return 'Sábado';
    default:
      return '';
  }
};

export const getMysteryTitle = (type: string): string => {
  switch (type) {
    case 'joyful':
      return 'Mistérios Gozosos';
    case 'sorrowful':
      return 'Mistérios Dolorosos';
    case 'glorious':
      return 'Mistérios Gloriosos';
    case 'luminous':
      return 'Mistérios Luminosos';
    default:
      return 'Mistérios';
  }
};

// Mistérios
export const Mysteries: Record<string, Mystery[]> = {
  joyful: [
    {
      title: '1º Mistério Gozoso',
      description: 'A Anunciação do Anjo Gabriel à Nossa Senhora.',
      type: 'joyful'
    },
    {
      title: '2º Mistério Gozoso',
      description: 'A Visitação de Nossa Senhora à sua prima Santa Isabel.',
      type: 'joyful'
    },
    {
      title: '3º Mistério Gozoso',
      description: 'O Nascimento de Jesus em Belém.',
      type: 'joyful'
    },
    {
      title: '4º Mistério Gozoso',
      description: 'A Apresentação do Menino Jesus no Templo e Purificação de Nossa Senhora.',
      type: 'joyful'
    },
    {
      title: '5º Mistério Gozoso',
      description: 'A Perda e o Encontro do Menino Jesus no Templo.',
      type: 'joyful'
    }
  ],
  sorrowful: [
    {
      title: '1º Mistério Doloroso',
      description: 'A Agonia de Jesus no Horto das Oliveiras.',
      type: 'sorrowful'
    },
    {
      title: '2º Mistério Doloroso',
      description: 'A Flagelação de Jesus.',
      type: 'sorrowful'
    },
    {
      title: '3º Mistério Doloroso',
      description: 'A Coroação de Espinhos.',
      type: 'sorrowful'
    },
    {
      title: '4º Mistério Doloroso',
      description: 'Jesus carregando a Cruz para o Calvário.',
      type: 'sorrowful'
    },
    {
      title: '5º Mistério Doloroso',
      description: 'A Crucificação e Morte de Jesus.',
      type: 'sorrowful'
    }
  ],
  glorious: [
    {
      title: '1º Mistério Glorioso',
      description: 'A Ressurreição de Jesus.',
      type: 'glorious'
    },
    {
      title: '2º Mistério Glorioso',
      description: 'A Ascensão de Jesus ao Céu.',
      type: 'glorious'
    },
    {
      title: '3º Mistério Glorioso',
      description: 'A Descida do Espírito Santo sobre Nossa Senhora e os Apóstolos.',
      type: 'glorious'
    },
    {
      title: '4º Mistério Glorioso',
      description: 'A Assunção de Nossa Senhora ao Céu.',
      type: 'glorious'
    },
    {
      title: '5º Mistério Glorioso',
      description: 'A Coroação de Nossa Senhora como Rainha do Céu e da Terra.',
      type: 'glorious'
    }
  ],
  luminous: [
    {
      title: '1º Mistério Luminoso',
      description: 'O Batismo de Jesus no Rio Jordão.',
      type: 'luminous'
    },
    {
      title: '2º Mistério Luminoso',
      description: 'A Auto-revelação de Jesus nas Bodas de Caná.',
      type: 'luminous'
    },
    {
      title: '3º Mistério Luminoso',
      description: 'O Anúncio do Reino de Deus com o convite à conversão.',
      type: 'luminous'
    },
    {
      title: '4º Mistério Luminoso',
      description: 'A Transfiguração de Jesus.',
      type: 'luminous'
    },
    {
      title: '5º Mistério Luminoso',
      description: 'A Instituição da Eucaristia.',
      type: 'luminous'
    }
  ]
};

// Orações básicas
export const Prayers = {
  signOfCross: "Pelo sinal da Santa Cruz, livrai-nos Deus, Nosso Senhor, dos nossos inimigos. Em nome do Pai, e do Filho e do Espírito Santo. Amém.",
  
  apostlesCreed: "Creio em Deus Pai todo-poderoso, criador do céu e da terra; e em Jesus Cristo, seu único Filho, nosso Senhor; que foi concebido pelo poder do Espírito Santo; nasceu da Virgem Maria, padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado; desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus, está sentado à direita de Deus Pai todo-poderoso, donde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo, na santa Igreja católica, na comunhão dos santos, na remissão dos pecados, na ressurreição da carne, na vida eterna. Amém.",
  
  ourFather: "Pai-Nosso que estais nos Céus, santificado seja o vosso nome, venha a nós o vosso Reino, seja feita a vossa vontade, assim na Terra como no Céu. O pão nosso de cada dia nos dai hoje, perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido, e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.",
  
  hailMary: "Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte. Amém.",
  
  gloryBe: "Glória ao Pai, ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.",
  
  oMeuJesus: "Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno, levai as almas todas para o céu e socorrei principalmente as que mais precisarem da vossa misericórdia.",
  
  salvePrayers: "Salve-Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos, os degredados filhos de Eva; a vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei; e, depois deste desterro, mostrai-nos Jesus, bendito fruto do vosso ventre, ó clemente, ó piedosa, ó doce sempre Virgem Maria. Rogai por nós, Santa Mãe de Deus. Para que sejamos dignos das promessas de Cristo. Amém.",
  
  tercoOffering: "Divino Jesus, nós vos oferecemos este terço que vamos rezar, meditando nos mistérios da vossa Redenção. Concedei-nos, por intercessão da Virgem Maria, Mãe de Deus e nossa Mãe, as virtudes que nos são necessárias para bem rezá-lo e a graça de ganharmos as indulgências desta santa devoção."
};

// Passos para o Santo Terço
export const TercoSteps: PrayerStep[] = [
  {
    id: 'offering',
    title: 'Oferecimento do Terço',
    description: 'Faça o seu oferecimento pessoal antes de iniciar o Santo Terço. Você pode agradecer, pedir e oferecer suas intenções.',
    prayerText: Prayers.tercoOffering,
    type: 'prayer'
  },
  {
    id: 'signOfCross',
    title: 'Sinal da Cruz',
    description: 'Inicie o terço fazendo o sinal da Cruz e invocando a proteção divina.',
    prayerText: Prayers.signOfCross,
    type: 'prayer'
  },
  {
    id: 'apostlesCreed',
    title: 'Creio (Credo dos Apóstolos)',
    description: 'Recite o Símbolo dos Apóstolos, professando a sua fé.',
    prayerText: Prayers.apostlesCreed,
    type: 'prayer'
  },
  {
    id: 'initialOurFather',
    title: 'Pai-Nosso',
    description: 'Reze um Pai-Nosso pelas intenções do Santo Padre.',
    prayerText: Prayers.ourFather,
    type: 'prayer'
  },
  {
    id: 'initialHailMarys',
    title: 'As Três Ave-Marias',
    description: 'Reze três Ave-Marias pelas virtudes da fé, esperança e caridade.',
    prayerText: Prayers.hailMary,
    type: 'prayer',
    repetitions: 3
  },
  {
    id: 'gloria',
    title: 'Glória ao Pai',
    description: 'Reze o Glória ao Pai.',
    prayerText: Prayers.gloryBe,
    type: 'prayer'
  }
];
