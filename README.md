# Portfólio Profissional | Full Stack Developer

Bem-vindo ao repositório do meu site portfólio pessoal.
Este projeto foi desenvolvido com foco em **Performance**, **UX (Experiência do Usuário)** e **Design Fluido**, utilizando as tecnologias mais modernas do ecossistema React.

🔗 **Acesse online:** [gabrielmartielo.com.br](https://gabrielmartielo.com.br)

O objetivo é apresentar meus projetos, habilidades e trajetória profissional através de uma interface imersiva e interativa.

💡 O Diferencial: PDF Dinâmico & Fonte Única da Verdade

A principal inovação deste projeto é a arquitetura de dados.
Ao invés de manter um site e um arquivo PDF (Currículo) separados e desatualizados, criei um sistema onde:

1.  Todos os dados (Experiências, Projetos, Skills) residem em um único arquivo TypeScript (`src/data/profile.ts`).
2.  O site consome esses dados para renderizar a interface visual.
3.  **O PDF é gerado em tempo real** no navegador do usuário usando os *mesmos dados*, garantindo que o recrutador sempre baixe a versão mais atualizada do meu currículo.

## 🚀 Tecnologias Utilizadas

Este projeto utiliza uma stack moderna voltada para escalabilidade e performance:

* **Core:** [Next.js 15](https://nextjs.org/) (App Router) & [React](https://react.dev/)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (Segurança de tipos)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
* **Animações:** [Framer Motion](https://www.framer.com/motion/) (Transições complexas e micro-interações)
* **PDF Generation:** [@react-pdf/renderer](https://react-pdf.org/)
* **UX & Scroll:** [@studio-freight/lenis](https://github.com/studio-freight/lenis) (Smooth Scrolling premium)
* **Componentes UI:** [Swiper.js](https://swiperjs.com/) (Carrossel interativo) & [React Icons](https://react-icons.github.io/react-icons/)

## ✨ Funcionalidades Principais

* **Smooth Scrolling:** Navegação fluida e "amanteigada" usando Lenis.
* **Animações Declarativas:** Elementos que reagem ao scroll (fade-in, slide-up) usando Framer Motion.
* **Design Responsivo:** Layout totalmente adaptável para Mobile, Tablet e Desktop.
* **Modo Escuro/Claro:** (Planejado/Em implementação).
* **Performance:** Otimização de fontes (Montserrat) e imagens via Next.js.

## 📂 Estrutura do Projeto

A arquitetura segue os padrões do **Next.js App Router**:

~~~
├── src/
│   ├── app/             # Next.js App Router
│   ├── components/      # Componentes React modulares
│   │   ├── layout/      # Navbar, Footer
│   │   ├── pdf/         # Layout e Lógica do Documento PDF
│   │   ├── sections/    # Seções da Home (Hero, Projetos, etc.)
│   │   └── ui/          # Botões, Cards, Ícones reutilizáveis
│   ├── data/            # Dados estáticos (Projetos, Skills)
│   │   └── styles/      # A "Fonte da Verdade" (Dados do Currículo)
│   └── styles/          # Configurações globais do Tailwind
~~~

## 🔧 Como Rodar Localmente

Siga os passos abaixo para clonar e executar o projeto em sua máquina:

~~~
git clone [https://github.com/SEU-USUARIO/meu-portfolio.git](https://github.com/SEU-USUARIO/meu-portfolio.git)
~~~

~~~
cd meu-portfolio
npm install
~~~

~~~
npm run dev
~~~

## 🌐 Deploy
O deploy contínuo é realizado através da Vercel, garantindo alta disponibilidade e performance global.

### Spotify em produção

O card "Ouvindo agora" exige estas variáveis no projeto da Vercel:

```text
SPOTIFY_CLIENT_ID
SPOTIFY_CLIENT_SECRET
SPOTIFY_REFRESH_TOKEN
```

Cadastre as três em **Settings → Environment Variables** para Production, Preview e Development e faça um novo deploy. O `SPOTIFY_REFRESH_TOKEN` é obtido localmente acessando `http://127.0.0.1:3000/api/spotify/login`. Refresh tokens do Spotify expiram e, quando isso acontecer, a autorização precisa ser refeita.

## 📄 Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para usar como inspiração.

Desenvolvido com 💙 por Gabriel Martielo da Silva

LinkedIn: https://www.linkedin.com/in/gabrielmartielo \
GitHub: https://github.com/smartielo/
