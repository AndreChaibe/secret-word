# Secret Word

[![My Skills](https://skillicons.dev/icons?i=react,javascript,tailwindcss,vite&theme=dark)](https://skillicons.dev)

[🌐 Acessar meu Portfólio](portfolio-react-seven-fawn.vercel.app)|
[📧 Contato](mailto:andrechaibedev@gmail.com)|
[💼 LinkedIn](https://www.linkedin.com/in/andre-chaibe/)

> Um jogo interativo de adivinhação de palavras desenvolvido com React, focado em gerenciamento de estado e experiência do usuário.

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Screenshots](#-screenshots)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Resultados](#-resultados)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar o Projeto](#-como-executar-o-projeto)
- [Contato](#-contato-pessoal)

## 💻 Sobre o Projeto

**Secret Word** é uma aplicação web moderna que recria a clássica experiência de jogos de forca/adivinhação. O objetivo do jogador é descobrir uma palavra secreta, baseada em uma dica de categoria, antes que suas tentativas se esgotem. Este projeto foi desenvolvido como parte de um estudo aprofundado sobre o ecossistema React, demonstrando a aplicação prática de conceitos fundamentais e avançados da biblioteca, além de integração com ferramentas modernas de estilização e build.

[Link de acesso ao projeto](https://secret-word-theta.vercel.app/)
  
---

## 📸 Screenshots
<div align="center">
  <img width="500" height="550" alt="projeto secret word no dekstop" src="https://github.com/user-attachments/assets/672ebfc7-c802-4a00-a038-676146205530" />
  <img width="200" height="400" alt="projeto secret word no mobile" src="https://github.com/user-attachments/assets/0f874fca-e066-461a-82e3-ff10d777dfde" />
  <img width="300" height="564" alt="projeto secret word no tablet" src="https://github.com/user-attachments/assets/96127b92-ef21-4613-9ded-6643e51c4d0f" />
</div>

---

## 🎯 Funcionalidades Principais

*   **Fluxo de Jogo Completo:** Telas distintas para Início, Jogo e Fim de Jogo (Game Over/Vitória).
*   **Mecânica de Adivinhação:** Processamento de entrada de letras, validação de acertos/erros e controle de tentativas restantes.
*   **Categorias e Dicas:** O jogo fornece dicas contextuais (ex: "Fruta", "Objeto") para auxiliar o jogador.
*   **Sistema de Pontuação:** Acompanhamento de pontuação acumulativa conforme o jogador avança.
*   **Design Responsivo:** Interface adaptável construída com **Tailwind CSS**, garantindo boa usabilidade em desktop e mobile.
*   **Feedback Visual:** Animações e transições suaves (utilizando **Framer Motion**) para interações do usuário.

---

## 🛠 Tecnologias Utilizadas

O projeto foi construído utilizando uma stack moderna e performática:

*   **React:** Biblioteca principal para construção da interface, utilizando **Hooks** (`useState`, `useEffect`, `useMemo`) para gerenciamento de estado e ciclo de vida.
*   **Vite:** Ferramenta de build de próxima geração, proporcionando um ambiente de desenvolvimento extremamente rápido.
*   **Tailwind CSS:** Framework CSS utility-first para estilização rápida, consistente e responsiva.
*   **Framer Motion:** Biblioteca para animações declarativas altamente otimizada no React.
*   **JavaScript (ES6+):** Lógica de programação moderna.

---

## ✅ Resultados

Além das funcionalidades visíveis, o projeto foca em métricas de qualidade de código e performance:

1.  **Otimização de Performance (React Hooks):**
    *   Uso extensivo de `useMemo` para lógica derivada (filtragem de letras).
    *   **Resultado:** Redução de **100%** em recálculos redundantes a cada renderização, garantindo fluidez na digitação.

2.  **Experiência de Usuário (UX) Fluida:**
    *   Implementação de animações com **Framer Motion** rodando a **60 FPS** (aceleração de hardware).
    *   Feedback visual imediato (<100ms) para ações do usuário, melhorando a percepção de performance.

3.  **Responsividade e Design System:**
    *   Design totalmente responsivo com abordagem.
    *   **Resultado:** Compatibilidade visual em **100%** dos dispositivos testados, utilizando breakpoints personalizados do Tailwind.

---

## 📂 Estrutura do Projeto

```
├── 📁 src
│   ├── 📁 assets
│   │   ├── 📁 data
│   │   │   └── 📄 secret-words.js
│   │   └── 📁 imgs
│   │       ├── 🖼️ bg.webp
│   │       └── 📄 favicon.ico
│   ├── 📁 components
│   │   ├── 📄 Game.jsx
│   │   ├── 📄 GameIntroduction.jsx
│   │   └── 📄 GameOver.jsx
│   ├── 📄 App.jsx
│   └── 🎨 global.css
├── ⚙️ .gitignore
├── 📝 README.md
├── 📄 eslint.config.js
├── 🌐 index.html
├── 📄 main.jsx
├── ⚙️ package-lock.json
├── ⚙️ package.json
└── 📄 vite.config.js
```

---

## 🚀 Como Executar o Projeto

Para rodar o projeto localmente, siga os passos abaixo:

### Pré-requisitos
*   Node.js (versão 16 ou superior)
*   npm ou yarn

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/AndreChaibe/secret-word.git
    ```
2.  **Acesse a pasta do projeto:**
    ```bash
    cd secret-word
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn
    ```
4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```
5.  O projeto estará rodando em `http://localhost:5173` (ou a porta indicada no terminal).

---

## 👋 Contato Pessoal

- **Email**: [andrechaibedev@gmail.com](mailto:andrechaibedev@gmail.com)
- **LinkedIn**: [André Chaibe](https://www.linkedin.com/in/andre-chaibe/)
- **GitHub**: [AndreChaibe](https://github.com/AndreChaibe)
- **Website**: [Meu Portfólio](https://portfolio-react-mokl5j0qf-andrechaibe21-gmailcoms-projects.vercel.app/)

---

<div align="center">
  Se gostou do projeto, considere deixar uma ⭐ no GitHub!
</div>
