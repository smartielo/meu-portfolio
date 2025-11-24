// src/data/profile.ts
export interface Project {
  title: string;
  description: string;
  tags: string[];
  repoLink?: string;
  demoLink?: string;
  image: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description?: string;
}

export interface Course {
  title: string;
  institution: string;
  duration: string;
  link?: string; // Link para o certificado (usaremos no futuro botão do site)
}

export const profileData = {
  name: "Gabriel Martielo Da Silva",
  role: "Estudante de Ciência da Computação",
  headline: "Transicionando da área mecânica para a tecnologia da informação.",
  location: "Bauru, São Paulo, Brasil",
  email: "dev.gabrielmartielo@gmail.com",
  email2: "gabrielmartielo3214@gmail.com",
  linkedin: "https://www.linkedin.com/in/gabrielmartielo",
  github: "https://github.com/smartielo",
  
  about: `
    Sou formado na área mecânica, mas ao longo da minha trajetória percebi que minha verdadeira vocação está no desenvolvimento de software. 
    Desde então, tenho me dedicado ao estudo da programação por meio de cursos especializados e atualmente curso Ciência da Computação.
    Busco uma oportunidade para aplicar meus conhecimentos na prática, contribuir com soluções tecnológicas e seguir crescendo profissionalmente na área de tecnologia.
  `,

  skills: [
    {
      category: "Front-end",
      skills: ["React.JS", "JavaScript", "HTML/CSS"] 
    },
    {
      category: "Soft Skills & Outros",
      skills: ["Organização", "Trabalho em Equipe", "Aprendizado Contínuo", "Inglês Intermediário"]
    },
    {
      category: "Ferramentas",
      skills: ["Git", "GitHub", "VS Code"]
    }
  ] as SkillCategory[],

  projects: [
    {
      title: "Sangue Bom",
      description: "Site voltado à comunidade com o objetivo de conscientização e informação sobre a doação de sangue na cidade de Bauru. Desenvolvido como Projeto Integrador no SENAC.",
      tags: ["React.JS", "Web", "Utilidade Pública"],
      repoLink: "https://github.com/guspavanelli/projetointegrador",
      image: "/projects/sangue-bom.png"
    },
    {
      title: "Guiar. LTDA",
      description: "Criação de uma empresa e um produto (kit didático de transmissão de forças) para o TCC técnico do CTI Bauru.",
      tags: ["Gestão de Projeto", "Empreendedorismo", "Mecânica"],
      
      image: "/projects/guiar-ltda.png"
    }
  ] as Project[],

  education: [
    {
      institution: "Unisagrado",
      degree: "Bacharelado em Ciência da Computação",
      period: "Março 2025 - Dezembro 2028"
    },
    {
      institution: "Colégio Técnico Industrial (CTI Bauru)",
      degree: "Ensino Médio e Técnico em Mecânica",
      period: "Fevereiro 2020 - Dezembro 2022"
    },
    {
      institution: "SENAC Bauru",
      degree: "Desenvolvedor Full Stack & React.JS",
      period: "Cursos Livres"
    }
  ] as Education[],

  experiences: [
    {
      role: "Técnico de Planejamento",
      company: "CPFL Energia",
      period: "Agosto 2024 - Atual"
    },
    {
      role: "Montador Mecânico",
      company: "Gali",
      period: "Março 2024 - Maio 2024"
    },
    {
      role: "Auxiliar de Produção",
      company: "Tilibra",
      period: "Maio 2023 - Março 2024"
    },
    {
      role: "Operador de Telemarketing",
      company: "Concilig",
      period: "Março 2023 - Maio 2023"
    }
  ] as Experience[],

  courses: [
    {
      title: "Big Data e Analytics",
      institution: "FIAP",
      duration: "60h",
      link: "https://drive.google.com/file/d/1_mTVRkW70djDoRXHpTPhprDKUZ6dh94t/view?usp=sharing" 
    },
    {
      title: "Python",
      institution: "FIAP",
      duration: "12h"
    },
    {
      title: "Git e GitHub para Iniciantes",
      institution: "Udemy",
      duration: "5h"
    }
  ] as Course[]
};

