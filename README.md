# Github Finder 🔍 (React + TypeScript)

Este projeto é uma aplicação React que permite buscar informações de usuários no GitHub. Com a integração do React Router, o sistema navega entre a página inicial e uma página de repositórios específicos de cada usuário. Ideal para quem deseja explorar perfis de desenvolvedores e seus projetos.

<!--
Inserir a imagem aqui
![image](https://github.com/user-attachments/assets/ae958ce3-02a0-4942-98da-6bce55b97956)
-->

---

## 🚀 Tecnologias Utilizadas

- ⚛️ React
- 📘 TypeScript
- ⚡ Vite
- 🛣️ React Router Dom
- 🎨 CSS Modules
- 🔗 Fetch API

---

## 📋 Funcionalidades

- **Busca de usuários do GitHub**: Pesquise qualquer usuário e visualize seu perfil.
- **Visualização de repositórios**: Veja os 5 repositórios mais estrelados de um usuário.
- **Navegação por páginas**: Roteamento entre as páginas Home e Repos com React Router.
- **Feedback visual**: Mensagens de erro e carregamento durante as requisições.
- **Design modularizado**: Componentes reutilizáveis para uma estrutura de código limpa e eficiente.

---

## 🧠 O que foi explorado nesse projeto

- **React Router** para navegação entre páginas e rotas dinâmicas.
- **Manipulação de estados complexos** com hooks (`useState`, `useEffect`).
- **Uso da Fetch API** para integrar com o GitHub API e manipular dados de usuários e repositórios.
- **Componentização**: Criação de componentes como `User`, `Repo`, `Search`, entre outros, para manter o código modular e reutilizável.
- **Estilos com CSS Modules**: Isolamento de estilos por componente, evitando conflitos globais.

---

## 🛠️ Como rodar o projeto localmente

1. Clone o repositório:
    ```bash
    git clone https://github.com/SEU_USUARIO/github-finder.git
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Rode o projeto:
    ```bash
    npm run dev
    ```

4. Acesse via:
    ```bash
    http://localhost:5173
    ```

---

## 💡 Como contribuir

1. Faça o fork deste repositório.
2. Crie uma branch para sua funcionalidade:
    ```bash
    git checkout -b nome-da-branch
    ```
3. Faça suas alterações e commit:
    ```bash
    git commit -m "feat: descrição da funcionalidade"
    ```
4. Envie a branch:
    ```bash
    git push origin nome-da-branch
    ```
5. Crie um Pull Request explicando suas mudanças.
