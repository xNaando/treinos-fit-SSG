export interface Exercicio {
  nome: string
  series: string
  descanso: string
}

export interface Treino {
  slug: string
  titulo: string
  descricao: string
  nivel: 'Iniciante' | 'Intermediário' | 'Avançado'
  duracao: string
  exercicios: Exercicio[]
}

export const treinos: Treino[] = [
  {
    slug: 'corpo-inteiro-iniciante',
    titulo: 'Corpo Inteiro para Iniciantes',
    descricao: 'Um treino leve que trabalha todos os grupos musculares sem equipamento.',
    nivel: 'Iniciante',
    duracao: '20 minutos',
    exercicios: [
      { nome: 'Agachamento', series: '3x12', descanso: '60s' },
      { nome: 'Flexão de braço (joelhos no chão)', series: '3x10', descanso: '60s' },
      { nome: 'Abdominal supra', series: '3x15', descanso: '45s' },
      { nome: 'Avanço alternado', series: '3x10 por perna', descanso: '60s' },
      { nome: 'Prancha', series: '3x30s', descanso: '45s' }
    ]
  },
  {
    slug: 'hiit-queima-gordura',
    titulo: 'HIIT para Queimar Gordura',
    descricao: 'Treino intervalado de alta intensidade para acelerar o metabolismo.',
    nivel: 'Intermediário',
    duracao: '25 minutos',
    exercicios: [
      { nome: 'Polichinelo', series: '40s', descanso: '20s' },
      { nome: 'Mountain climber', series: '40s', descanso: '20s' },
      { nome: 'Burpees', series: '40s', descanso: '20s' },
      { nome: 'Corrida estacionária', series: '40s', descanso: '20s' },
      { nome: 'Abdominal bicicleta', series: '40s', descanso: '20s' }
    ]
  },
  {
    slug: 'forca-sem-equipamento',
    titulo: 'Força sem Equipamento',
    descricao: 'Treino focado em hipertrofia usando apenas o peso do corpo.',
    nivel: 'Avançado',
    duracao: '40 minutos',
    exercicios: [
      { nome: 'Pistol squat (agachamento unilateral)', series: '4x8 por perna', descanso: '90s' },
      { nome: 'Flexão diamante', series: '4x12', descanso: '60s' },
      { nome: 'Barra invertida (móvel)', series: '4x10', descanso: '60s' },
      { nome: 'Avanço avançado', series: '4x10 por perna', descanso: '60s' },
      { nome: 'Prancha com elevação de braço', series: '3x45s', descanso: '45s' }
    ]
  },
  {
    slug: 'alongamento-mobilidade',
    titulo: 'Alongamento e Mobilidade',
    descricao: 'Sessão de recuperação para relaxar e melhorar a amplitude de movimento.',
    nivel: 'Iniciante',
    duracao: '15 minutos',
    exercicios: [
      { nome: 'Alongamento de panturrilha', series: '2x30s', descanso: '10s' },
      { nome: 'Rotação de quadril', series: '2x30s', descanso: '10s' },
      { nome: 'Abraçar os joelhos', series: '2x30s', descanso: '10s' },
      { nome: 'Cobra alongando coluna', series: '2x30s', descanso: '10s' },
      { nome: 'Posição do bebê', series: '2x30s', descanso: '10s' }
    ]
  }
]
