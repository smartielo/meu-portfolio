// src/data/profile.ts

export interface Project {
  title: string;
  description: string;
  tags: string[];
  repoLink: string;
  demoLink?: string;
  image: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

// Nova interface para Skills categorizadas
export interface SkillCategory {
  category: string;
  skills: string[];
}

export const profileData = {
  name: "Gabriel Martielo", 
  // MUDANÇA ESTRATÉGICA 1: Título mais abrangente
  role: "Estudante de Ciência da Computação",
  
  // MUDANÇA ESTRATÉGICA 2: Headline que conecta as duas áreas
  headline: "Explorando a tecnologia através do Desenvolvimento Full Stack e da Análise de Dados. Transformando problemas complexos em soluções digitais.",
  
  location: "Brasil",
  email: "dev.gabrielmartielo@gmail.com", 
  linkedin: "https://linkedin.com/in/gabrielmartielo",
  github: "https://github.com/smartielo",
  
  about: `
    Sou um estudante de Ciência da Computação apaixonado por entender como os dados podem impulsionar aplicações web modernas. 
    Não me limito a uma única stack: transito entre a criação de interfaces fluídas com React e a análise de datasets com Python.
    Meu objetivo é utilizar a tecnologia para resolver problemas reais, seja no front-end ou nos bastidores dos dados.
  `,

  // MUDANÇA ESTRATÉGICA 3: Skills divididas (Isso vai ajudar muito no visual depois)
  skills: [
    {
      category: "Front-end & UI",
      skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"]
    },
    {
      category: "Back-end & Dados",
      skills: ["Node.js", "Python", "Pandas", "SQL", "APIs REST"]
    },
    {
      category: "Ferramentas",
      skills: ["Git", "GitHub", "VS Code", "Figma"]
    }
  ] as SkillCategory[],

  projects: [
    {
      title: "Portfólio Interativo",
      description: "Site pessoal com geração dinâmica de PDF e animações fluídas.",
      tags: ["Next.js", "React-PDF", "Framer Motion"],
      repoLink: "https://github.com/...",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop" 
    },
    // DICA: Adicione um projeto de DADOS aqui futuramente (ex: Dashboard em Python/Streamlit)
  ] as Project[],

  education: [
    {
      institution: "Unisagrado",
      degree: "Bacharelado em Ciência da Computação",
      period: "2025 - Presente"
    }
  ] as Education[]
  
};