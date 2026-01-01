# Secret Word

[![My Skills](https://skillicons.dev/icons?i=react,javascript,tailwindcss,vite&theme=dark)](https://skillicons.dev)

[🌐 Acessar Portfólio](https://portfolio-react-mokl5j0qf-andrechaibe21-gmailcoms-projects.vercel.app/)|
[📧 Contato](mailto:andrechaibedev@gmail.com)|
[💼 LinkedIn](https://www.linkedin.com/in/andre-chaibe/)

> Um jogo interativo de adivinhação de palavras desenvolvido com React, focado em gerenciamento de estado e experiência do usuário.

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Screenshots](#-funcionalidades-principais)
- [Características Principais](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-como-executar-o-projeto)
- [Instalação e Configuração](#-destaques-técnicos-e-Aprendizados)
- [Como Usar](#-estrutura-do-projeto)
- [Contato](#-contato-pessoal)

## 💻 Sobre o Projeto

**Secret Word** é uma aplicação web moderna que recria a clássica experiência de jogos de forca/adivinhação. O objetivo do jogador é descobrir uma palavra secreta, baseada em uma dica de categoria, antes que suas tentativas se esgotem. Este projeto foi desenvolvido como parte de um estudo aprofundado sobre o ecossistema React, demonstrando a aplicação prática de conceitos fundamentais e avançados da biblioteca, além de integração com ferramentas modernas de estilização e build.

---

### 🎯 Funcionalidades Principais

*   **Fluxo de Jogo Completo:** Telas distintas para Início, Jogo e Fim de Jogo (Game Over/Vitória).
*   **Mecânica de Adivinhação:** Processamento de entrada de letras, validação de acertos/erros e controle de tentativas restantes.
*   **Categorias e Dicas:** O jogo fornece dicas contextuais (ex: "Fruta", "Objeto") para auxiliar o jogador.
*   **Sistema de Pontuação:** Acompanhamento de pontuação acumulativa conforme o jogador avança.
*   **Design Responsivo:** Interface adaptável construída com **Tailwind CSS**, garantindo boa usabilidade em desktop e mobile.
*   **Feedback Visual:** Animações e transições suaves (utilizando **Framer Motion**) para interações do usuário.

---

## 🛠 Tecnologias Utilizadas

O projeto foi construído utilizando uma stack moderna e performática:

*   **[React](https://reactjs.org/):** Biblioteca principal para construção da interface, utilizando **Hooks** (`useState`, `useEffect`, `useMemo`) para gerenciamento de estado e ciclo de vida.
*   **Vite:** Ferramenta de build de próxima geração, proporcionando um ambiente de desenvolvimento extremamente rápido.
*   **Tailwind CSS:** Framework CSS utility-first para estilização rápida, consistente e responsiva.
*   **Framer Motion:** Biblioteca para animações declarativas altamente otimizada no React.
*   **JavaScript (ES6+):** Lógica de programação moderna.

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

## 💡 Destaques Técnicos e Aprendizados

Este projeto serviu para consolidar conhecimentos importantes no desenvolvimento Front-end:

1.  **Gerenciamento de Estado Complexo:**
    *   Controle de múltiplos estados interligados (letras adivinhadas, letras erradas, tentativas, estágio do jogo).
    *   Uso de `useEffect` para monitorar condições de vitória ou derrota.

2.  **Performance e Otimização:**
    *   Uso de `useMemo` para memorizar funções passadas como props, evitando re-renderizações desnecessárias.

3.  **Componentização:**
    *   Arquitetura baseada em componentes reutilizáveis e bem definidos, facilitando a manutenção e escalabilidade do código.

4.  **Estilização Moderna:**
    *   Aplicação prática do Tailwind CSS para criar layouts complexos sem sair do HTML/JSX, utilizando classes utilitárias para background, tipografia e layout flexbox/grid.


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

## 👋 Contato Pessoal

- **Email**: [andrechaibedev@gmail.com](mailto:andrechaibedev@gmail.com)
- **LinkedIn**: [André Chaibe](https://www.linkedin.com/in/andre-chaibe/)
- **GitHub**: [AndreChaibe](https://github.com/AndreChaibe)
- **Website**: [Meu Portfólio](https://portfolio-react-mokl5j0qf-andrechaibe21-gmailcoms-projects.vercel.app/)

---

<div align="center">
  Se gostou do projeto, considere deixar uma ⭐ no GitHub!
</div>