import { Question } from "./types";

export const IMAGES = {
  welcomeHero: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQpCq9xjYq-d-KeFl7R8qmdOZvHjgQCcfhQXXjMrbXIH-qfXYJkmCOaBFIxWF2b-v3ezZKU9VLRbXiRxLF_t_sDq7lj_bzWDU7ozpO22A9eEAsKlK6OZCE_g1PwbJkNkUqcfv4zWonsRy7cRJCjgvkEjneov3Nf2fXWMYF9trhkC7eikbtX136uRKeeQiCyQIOB4JcbM_MZ387_pofye9O-O3_V77GgjiTWVYQHNiikbG-pwpW-3aS2ctGztTVZ9T9pW0GymU0wOAm",
  arrowDoodle: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyWEzTUJ3PT4-XSyzIwJ-84bS8g49P0U5bYShtBOSGpSvSiFk7ltI_YULP9wHT_kKe_8KbVA0K0E_yaxiLTQ36A43zwChpUyW8Lhd8l5Dzuwx1fh9OjjCbLAaVANW5EMsc7RtO2wcSxB7eC19gX_EKUWhKUSvzdHU0-21F-oDKga1T3sx6PiBhQX63XxM5mpK7uUBkfAOWz6jHOm2B4pzUf6YzPn6FUp4wsryj04BRDEvpIkAZTfObDkj9b80-ACuOi1lF7ZgWsnDM",
  profile: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_Fv-Z_rmesLzzf0zgs9dLgLKZ9FZzuTcsKUifmstTKkAET-4f9XaOLU3rHW9a7kQtgjdpIdKkc3YSEvK1pP5PJSb-wWFQZ3s-1Rt1JgWINOwkTOBPc_9JJdm6Y0CvWWMWtQysXfy2x5ufMxpL0p2Xgd2Olh5wkgpERatd8LGN0j0Whn3YNTst_SVh2K5ZR5GR8dx2LhltX_45riTL5w4_2HxfZEx2vbH10_19-CLJWj3kRLBIEf-8rE32DbIH6j1rJXcv7Jkie5Rl"
};

export const QUESTIONS: Question[] = [
  {
    id: 1,
    title: "Para fins estatísticos, qual a sua faixa etária?",
    options: [
      { id: "q1_opt1", label: "18 a 25 anos", value: "18-25" },
      { id: "q1_opt2", label: "26 a 35 anos", value: "26-35" },
      { id: "q1_opt3", label: "36 a 50 anos", value: "36-50" },
      { id: "q1_opt4", label: "Mais de 50 anos", value: "50+" },
    ],
  },
  {
    id: 2,
    title: "Em momentos de forte estresse ou ansiedade, como seu apetite reage?",
    options: [
      { id: "q2_opt1", label: "Minha fome desaparece (\"nó na garganta\").", value: "disappears" },
      { id: "q2_opt2", label: "Sinto vontade urgente de comer (geralmente doces, massas ou o que tiver).", value: "urgent" },
      { id: "q2_opt3", label: "Não muda nada.", value: "no_change" },
    ],
  },
  {
    id: 3,
    title: "Com que frequência você come sem estar com fome física (aquela que o estômago ronca), apenas por tédio ou busca de conforto?",
    options: [
      { id: "q3_opt1", label: "Frequentemente / Quase todo dia.", value: "frequent" },
      { id: "q3_opt2", label: "Às vezes / Finais de semana.", value: "sometimes" },
      { id: "q3_opt3", label: "Raramente.", value: "rarely" },
      { id: "q3_opt4", label: "Nunca.", value: "never" },
    ],
  },
  {
    id: 4,
    title: "Após comer por impulso emocional, qual sentimento costuma aparecer?",
    options: [
      { id: "q4_opt1", label: "Satisfação e tranquilidade.", value: "satisfaction" },
      { id: "q4_opt2", label: "Culpa ou arrependimento.", value: "guilt" },
      { id: "q4_opt3", label: "Indiferença.", value: "indifference" },
    ],
  },
  {
    id: 5,
    title: "Você sabe diferenciar os sinais físicos da fome (como estômago roncando) da vontade emocional de comer?",
    options: [
      { id: "q5_opt1", label: "Não, para mim é tudo fome.", value: "no" },
      { id: "q5_opt2", label: "Tenho dúvidas, às vezes confundo os dois.", value: "doubts" },
      { id: "q5_opt3", label: "Sim, sei diferenciar claramente.", value: "yes" },
    ],
  },
];