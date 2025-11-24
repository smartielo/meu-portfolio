export interface Project {
  title: string;
  description: string;
  tags: string[];
  repoLink: string;
  demoLink?: string;
  image: string; // Caminho da imagem em /public ou URL
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export const profileData = {
  name: "Gabriel M.", // Coloque seu nome completo aqui
  role: "Desenvolvedor Full Stack",
  headline: "Estudante de Ciência da Computação apaixonado por React e Interfaces Modernas.",
  location: "Brasil",
  email: "seu.email@exemplo.com", // Coloque seu email real
  linkedin: "https://linkedin.com/in/seu-perfil",
  github: "https://github.com/seu-user",
  
  about: `
    Sou um desenvolvedor focado em criar experiências web fluidas e performáticas. 
    Atualmente cursando Ciência da Computação, combino fundamentos teóricos sólidos 
    com as tecnologias mais modernas do mercado, como Next.js e React.
  `,

  skills: [
    "React", "Next.js", "TypeScript", "Tailwind CSS", 
    "Node.js", "Python", "Git", "Figma"
  ],

  projects: [
    {
      title: "Portfólio Interativo",
      description: "Site pessoal com geração dinâmica de PDF e animações fluídas.",
      tags: ["Next.js", "React-PDF", "Framer Motion"],
      repoLink: "https://github.com/...",
      image: "/projects/portfolio-cover.jpg" // Vamos adicionar essas imagens depois
    },
    // Adicione mais projetos aqui...
  ] as Project[],

  education: [
    {
      institution: "Universidade X", // Nome da sua faculdade
      degree: "Bacharelado em Ciência da Computação",
      period: "2023 - Presente"
    }
  ] as Education[]
};