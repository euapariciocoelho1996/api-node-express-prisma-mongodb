## Criando API do Zero com Node.js e Express

![Status](https://img.shields.io/badge/status-concluído-brightgreen)

Este projeto demonstra, de forma prática, como construir uma **API RESTful completa** utilizando:

* Autenticação com JWT 🔐
* Criptografia de senhas com bcrypt 🔑
* Banco de dados MongoDB 🍃
* ORM Prisma ⚡

---

## Visão Geral

API com:

* Cadastro de usuários
* Login autenticado
* Rotas públicas e privadas
* Middleware de autenticação
* Integração com banco de dados

---

## Tecnologias Utilizadas

<div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
<img alt="Node.js" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
<img alt="Express" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
<img alt="Prisma" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" />
<img alt="MongoDB" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
<img alt="Bcrypt" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
<img alt="JWT" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
</div>

<br/>

* Node.js
* Express
* Prisma ORM
* MongoDB
* Bcrypt
* JSON Web Token (JWT)

---

## Estrutura do Projeto

<img width="451" height="691" alt="image" src="https://github.com/user-attachments/assets/961c39ab-e2ff-4efe-ae42-f8a558c1cd54" />

---

## Instalação e Execução

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

### 2️⃣ Instalar dependências

```bash
npm install
```

### 3️⃣ Configurar variáveis de ambiente

Crie um arquivo `.env`:

```env
DATABASE_URL="sua_string_mongodb"
JWT_SECRET="sua_chave_secreta"
```

### 4️⃣ Configurar o Prisma

```bash
npx prisma db push
npx prisma studio
```

### 5️⃣ Rodar o projeto

```bash
node server.js
```

Servidor rodando em:

```
http://localhost:3000
```

---

## Rotas da API

### 📌 Públicas

| Método | Rota      | Descrição          |
| ------ | --------- | ------------------ |
| POST   | /cadastro | Criar usuário      |
| POST   | /login    | Autenticar usuário |

---

### Privadas

| Método | Rota      | Descrição       |
| ------ | --------- | --------------- |
| GET    | /usuarios | Listar usuários |

---

## Testando a API

Você pode usar:

* Thunder Client (VS Code)
* Postman
* Insomnia

### Exemplo de Header para rotas privadas:

```http
Authorization: Bearer SEU_TOKEN_AQUI
```

---

## Exemplo de Fluxo

1. Cadastrar usuário
2. Fazer login
3. Receber token JWT
4. Acessar rota privada com token

---

## Conceitos Aplicados

* REST API
* Middleware
* Autenticação stateless
* Hash de senha
* ORM
* Segurança básica em APIs

📝 Rascunho do Projeto

Você pode acompanhar a versão em desenvolvimento ou anotações do projeto no link abaixo:

🔗 Rascunho / Documentação em andamento: https://www.notion.so/Node-js-Prisma-MongoDB-326f835d75a0801caad9df143e8e4b2b?source=copy_link

---
