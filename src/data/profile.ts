import { DiMysql } from "react-icons/di";
import { Layout, Database, LineChart, Smartphone } from "lucide-react";

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

export interface TechProgress {
  label: string;
  level: number; // Porcentagem (0 a 100)
  color: string; // Cor da barra (Hex)
}

export const profileData = {
  name: "Gabriel Martielo Da Silva",
  role: "Estudante de Ciência da Computação",
  headline: "Estudante de Ciência da Computação focado em Desenvolvimento Full Stack e Análise de Dados.",
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
      category: "Programação & Frameworks",
      skills: ["Python","Dart/Flutter", "React.JS/.tsx", "JavaScript", "C#/.net", "C", "Kotlin","HTML/CSS"] 
    },
    {
      category: "Soft Skills & Outros",
      skills: ["Organização", "Trabalho em Equipe", "Aprendizado Contínuo", "Inglês Intermediário"]
    },
    {
      category: "Ferramentas",
      skills: ["Git", "GitHub", "VS Code", "Android Studio", "Postman", "DataSpell", "Trello", "Figma"],
    }
  ] as SkillCategory[],

  projects: [
    {
      title: "Sangue Bom",
      description: "Site voltado à comunidade com o objetivo de conscientização e informação sobre a doação de sangue na cidade de Bauru.",
      tags: ["React.JS", "Web", "Utilidade Pública"],
      repoLink: "https://github.com/guspavanelli/projetointegrador",
      image: "/projects/sangue-bom.png"
    },
    {
      title: "F1 Telemetry Analytics",
      description: "Análise de dados de telemetria da Fórmula 1 utilizando Python. O projeto processa dados de corridas para gerar visualizações de velocidade, aceleração e comparação entre pilotos.",
      tags: ["Python", "Data Science", "Pandas", "Matplotlib"],
      repoLink: "https://github.com/smartielo/F1-Telemetry-Viz",
      image: "/projects/f1telemetry.png" 
    },
    {
      title: "Portfólio Interativo",
      description: "Este site que você está navegando! Desenvolvido com as tecnologias mais modernas do ecossistema React, focado em performance, animações fluídas e geração dinâmica de documentos PDF.",
      tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "React-PDF"],
      repoLink: "https://github.com/smartielo/meu-portfolio",
      image: "/projects/portfolio-home.png" 
    },
    {
      title: "Sistema de Gestão - Centro Socioeducativo Irmã Adelaide",
      description: "Este projeto é uma plataforma web completa para a gestão do Centro Socioeducativo Irmã Adelaide. O sistema digitaliza todo o processo de inscrição, acompanhamento e gestão de participantes, substituindo fichas de papel por um fluxo digital seguro e eficiente.",
      tags: ["Python", "JavaScript", "Tailwind CSS", "React.JS", "MySQL"],
      repoLink: "https://github.com/smartielo/trabalho_socio",
      image: "/projects/home-page.png" 
    },
    {
      title: "F1 Telemetry Hub",
      description: "O F1 Telemetry Hub é uma aplicação web interativa que permite visualizar e analisar dados de telemetria de corridas reais da Fórmula 1",
      tags: ["Python", "Pandas", "FastF1", "FastAPI"],
      repoLink: "https://github.com/smartielo/F1-Web-Python",
      image: "/projects/f1-telemetry-hub.png" 
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
      title: "Desenvolvedor Full Stack",
      institution: "SENAC",
      duration: "388h",
      link: "https://drive.google.com/file/d/16OQsJdHGc4x3St7k5tOnUlWOcHaraOIy/view?usp=sharing" 
    },
    {
      title: "React.JS - Interfaces Front-End",
      institution: "SENAC",
      duration: "40h",
      link: "https://drive.google.com/file/d/186EBLYT1A7x17EGzXgaGs2vvGAQfWK54/view?usp=sharing" 
    },
    {
      title: "Big Data e Analytics",
      institution: "FIAP",
      duration: "60h",
      link: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=42974a8aff36a52e60122956262ac331&action=view" 
    },
    {
      title: "Python",
      institution: "FIAP",
      duration: "80h",
      link: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=fe4800f3abaf552d0f8d47cdad69321d&action=view" 
    },
    {
      title: "Business Intelligence - BI",
      institution: "FIAP",
      duration: "40h",
      link: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=4ac095f6e4263a6d9f16f84816beb897&action=view" 
    },
  ] as Course[],

  studying: [
    { label: "Python", level: 75, color: "#3776AB" }, // Azul Python
    { label: "Dart/Flutter", level: 60, color: "#7F52FF" }, // Roxo Dart
    { label: "Docker", level: 40, color: "#2496ED" }, // Azul Docker
    { label: "Cloud (AWS)", level: 30, color: "#FF9900" }, // Laranja AWS
  ] as TechProgress[],

  // Seu Setup
  setup: {
    image: "/projects/meu-setup.jpg", // Vamos colocar essa foto depois
    description: "Meu cantinho de estudos e desenvolvimento. Focado em produtividade e conforto.",
    specs: [
      "S23 Ultra",
      "ASUS TUF F15",
      "Monitor AOC Gaming 27pol",
      "Teclado Mecânico Redragon",
      "Mouse Attack Shark X11",
      "Fone KZ ZSN Pro X",
      "HeadPhone QCY H2",
      "Controle GameSir Nova Lite",
      "Alexa Gen4",
    ]
  },

  personalImage: "/projects/imagem-portfolio.jpg",

  hobbies: [
    {
      label: "Games",
      emoji: "🎮",
      items: ["Minecraft", "Forza Horizon 5", "EA FC"] 
    },
    {
      label: "Música",
      emoji: "🎧",
      items: ["Pagode", "Eletrônica", "Rap/Hip-Hop", "Sertanejo", "FlashBack's"] 
    },
    {
      label: "Esportes",
      emoji: "⚽", 
      items: ["Futebol", "Basquete", "Vôlei", "Futebol Americano", "Corrida"] 
    }
  ]
};
