export interface Modalidade {
  slug: string
  nome: string
  resumo: string
  descricao: string
  beneficios: string[]
  tempoIdeal: string
  caloriasPorMinuto: string
  imagem: string
  altImagem: string
}

export const modalidades: Modalidade[] = [
  {
    slug: 'zumba',
    nome: 'Zumba',
    resumo: 'Dança e exercício aeróbico em uma rotina cheia de energia e ritmo.',
    descricao: 'A Zumba combina movimentos de dança latina com exercícios aeróbicos, criando uma atividade divertida e eficiente para queimar calorias em casa.',
    beneficios: [
      'Melhora o condicionamento cardiovascular',
      'Queima calorias de forma lúdica',
      'Reduz o estresse e a ansiedade',
      'Trabalha coordenação motora e ritmo'
    ],
    tempoIdeal: '30 a 60 minutos por dia',
    caloriasPorMinuto: '6 a 10 kcal/min',
    imagem: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&w=800&q=80',
    altImagem: 'Mulher dançando em casa durante aula de zumba'
  },
  {
    slug: 'aerobica',
    nome: 'Aeróbica',
    resumo: 'Atividade cardiorrespiratória clássica para acelerar o metabolismo.',
    descricao: 'A aeróbica em casa utiliza movimentos repetitivos e de baixo impacto para elevar a frequência cardíaca, melhorar a resistência e tonificar o corpo.',
    beneficios: [
      'Fortalece o coração e os pulmões',
      'Aumenta a resistência física',
      'Ajuda no controle do peso',
      'Pode ser praticada em pequenos espaços'
    ],
    tempoIdeal: '20 a 45 minutos por dia',
    caloriasPorMinuto: '5 a 9 kcal/min',
    imagem: 'https://images.pexels.com/photos/3822188/pexels-photo-3822188.jpeg?auto=compress&cs=tinysrgb&w=800',
    altImagem: 'Pessoa fazendo exercício aeróbico em casa'
  },
  {
    slug: 'musculacao',
    nome: 'Musculação',
    resumo: 'Exercícios de força com o peso do corpo para ganho de massa muscular.',
    descricao: 'A musculação em casa pode ser feita com o peso do corpo, garrafas dágua ou elásticos, fortalecendo músculos e acelerando o metabolismo.',
    beneficios: [
      'Aumenta a força e a resistência muscular',
      'Acelera o metabolismo em repouso',
      'Melhora a postura e a estabilidade',
      'Reduz o risco de lesões no dia a dia'
    ],
    tempoIdeal: '30 a 50 minutos, 3 a 5 vezes por semana',
    caloriasPorMinuto: '4 a 8 kcal/min',
    imagem: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    altImagem: 'Homem fazendo exercício de musculação em casa'
  },
  {
    slug: 'pilates',
    nome: 'Pilates',
    resumo: 'Método de exercícios que une força, alongamento e consciência corporal.',
    descricao: 'O Pilates em casa foca no controle da respiração, no fortalecimento do core e na flexibilidade, sendo indicado para iniciantes e praticantes avançados.',
    beneficios: [
      'Fortalece o core e melhora a postura',
      'Aumenta a flexibilidade e o alongamento',
      'Reduz dores lombares e musculares',
      'Promove o controle mental e corporal'
    ],
    tempoIdeal: '20 a 40 minutos por dia',
    caloriasPorMinuto: '3 a 6 kcal/min',
    imagem: 'https://images.pexels.com/photos/3822191/pexels-photo-3822191.jpeg?auto=compress&cs=tinysrgb&w=800',
    altImagem: 'Mulher praticando pilates em casa'
  },
  {
    slug: 'yoga',
    nome: 'Yoga',
    resumo: 'Prática que une posturas, respiração e meditação para equilíbrio físico e mental.',
    descricao: 'O Yoga em casa ajuda a melhorar a flexibilidade, o equilíbrio e a concentração, além de reduzir o estresse e promover o bem-estar geral.',
    beneficios: [
      'Melhora a flexibilidade e o equilíbrio',
      'Reduz o estresse e a ansiedade',
      'Fortalece músculos profundos',
      'Melhora a qualidade do sono'
    ],
    tempoIdeal: '15 a 60 minutos por dia',
    caloriasPorMinuto: '2 a 5 kcal/min',
    imagem: 'https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=800&q=80',
    altImagem: 'Pessoa praticando yoga em casa'
  },
  {
    slug: 'hiit',
    nome: 'HIIT',
    resumo: 'Treino intervalado de alta intensidade para resultados rápidos.',
    descricao: 'O HIIT (High Intensity Interval Training) alterna períodos curtos de exercício intenso com intervalos de descanso, otimizando a queima de gordura em pouco tempo.',
    beneficios: [
      'Queima muitas calorias em pouco tempo',
      'Acelera o metabolismo por horas',
      'Melhora a capacidade cardiovascular',
      'Não requer equipamentos'
    ],
    tempoIdeal: '15 a 30 minutos por dia',
    caloriasPorMinuto: '8 a 14 kcal/min',
    imagem: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80',
    altImagem: 'Pessoa fazendo treino HIIT intenso em casa'
  },
  {
    slug: 'danca',
    nome: 'Dança',
    resumo: 'Atividade artística e física que une diversão, ritmo e exercício.',
    descricao: 'Dançar em casa é uma forma prazerosa de se movimentar, melhorar o humor, trabalhar o corpo inteiro e manter a saúde cardiovascular ativa.',
    beneficios: [
      'Melhora o humor e a autoestima',
      'Trabalha o corpo todo de forma harmônica',
      'Aumenta a resistência cardiorrespiratória',
      'Desenvolve criatividade e expressão'
    ],
    tempoIdeal: '20 a 60 minutos por dia',
    caloriasPorMinuto: '5 a 10 kcal/min',
    imagem: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&w=800&q=80',
    altImagem: 'Pessoa dançando em casa'
  },
  {
    slug: 'ginastica-localizada',
    nome: 'Ginástica Localizada',
    resumo: 'Exercícios focados em regiões específicas do corpo, como pernas, glúteos e abdômen.',
    descricao: 'A ginástica localizada em casa trabalha grupos musculares específicos com movimentos repetitivos e controlados, ajudando a tonificar e definir o corpo.',
    beneficios: [
      'Tonifica e define regiões específicas',
      'Melhora a força muscular localizada',
      'Pode ser feita sem equipamentos',
      'Ideal para iniciantes'
    ],
    tempoIdeal: '20 a 40 minutos por dia',
    caloriasPorMinuto: '4 a 7 kcal/min',
    imagem: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80',
    altImagem: 'Mulher fazendo exercício localizado em casa'
  }
]
