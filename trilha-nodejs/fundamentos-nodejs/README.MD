<p align="center">
  <img src="./assets/node.js.png" alt="Ignite Node">
</p>

<h1 align="center">Fundamentos Node.js</h1>

&nbsp;

## 💻 Sobre Fundamentos do NodeJS

Nesse módulo foram estudados os conceitos do Node.js, como é o seu funcionamento 
e os motivos pelo qual ele foi criado.

Também foram estudados os conceitos e regras por trás de uma API Rest, os métodos 
HTTPs, os principais códigos de retornos e tipos de parâmetros de uma requisição.

### 📌 O que é Node.js?

- Plataforma open-source permite execução da linguagem javascript do lado do servidor
- v8 + libuv + conjunto de módulos

### 📌 O que o Node.js veio resolver?

- criado por Ryan Dahl
- Barra de progresso do flickr ⇒ percebeu que para verificar o progresso deveria 
ser feita requisições para o back-end
- Tecnologias da época não davam um bom suporte ao processo de I/O

### 📌 Características do Node.js

- Arquitetura Event Loop
  - Call Stack ⇒ pilhas de funções que serão chamadas
- Single - Thread
- No-bocking I/O ⇒ diferente de outras linguagens, quando uma função é a função 
A e B, não há necessidade de que uma função tenha sido finalizada para que a outra 
possa ser feita.
- Módulos próprios
  - http
  - dns
  - fs ⇒ trabalhar com arquivos
  - buffer
  - ...

### 📌 Event Loop

- ouve a Call Stack, com todas as suas funções
- escuta uma requisição por vez, e enviar para a thread assim que ouve
- por padrão existem 4 threads disponíveis para serem executadas, que podem ser 
adaptdas
- utiliza o padrão UEPS ⇒ último que entra primeiro que sai
<p align="center">
<img src="./assets/event-loop.png" alt="Event Loop" />
</p>

### 📌 O que são gerenciadores de pacotes?

- NPM e Yarn
- Instalar bibliotecas externas
- Disponibilizar bibliotecas
- Será utilizado o yarn que é mais rápido que o npm e trás maiores benefícios

### 📌 Frameworks

- Express
- Egg.js
- Nest.js
- Adonis.js

## 📚 Conceitos sobre API Rest

### 📌 O que é API?

- Aplication programming Interface (Interface de Programação de aplicativos)
- Conjuntos de especificações de possíveis interações entre aplicações
- Documentação para desenvolvedor

### 📌 O que é REST?

- Representation State Transfer (Transferência Representacional de Estado)
- Modelo de arquitetura
- 6 Regras

### 📌 Regras Rest

- **_Client-Server_** ⇒ separação das responsabilidades
- **_Statelss_** ⇒ cliente pode realizar quantas requisições quiser, porém o 
servidor não armazena nenhum estado ou seção
- **_Cache_** ⇒ a aplicação disponibilizar suporte para o cache
- **_Inteface Uniforme_** ⇒ como o cliente e o servidor vão compartilhar a interface
  - Identificação dos recursos
    - http://enderecoservidor.com.br/produtcts
    - http://enderecoservidor.com.br/clients
  - Representação dos recursos
    - não precisar ser obrigatoriamente em JSON
  - Mensagens auto-descritivas
  - HATEOAS (Hypertext As The Engine Of Application State)
    - retornar links dentro da aplicação

<p align="center">
<img src="./assets/codigo.png" width="300" />
</p>

- **_Camadas_** ⇒ deve permitir que existam camadas entre o client e o service, 
por exemplo, balanceamento de cargas, seguranças, entre outros
- **_Código sob demanda_** ⇒ as funcionalidades do cliente sejam e estendidas na 
forma de scripts ou mini aplicativos

## 📚 Métodos de Requisições

### 📌 HTTP Verbs

- **GET** - Leitura
- **POST** - Criação
- **PUT** - Atualização
- **DELETE** - Deleção
- **PATCH** - Atualização parcial

### 📌 HTTP Codes

- **1XX**: Informativo - a solicitação foi aceita ou o processo continua em andamento
- **2XX**: Confirmação
  - 200: Requisição bem sucedida
  - 201 - Created - Geralmente usado para POST após uma inserção
- **3XX**: Redirecionamento
  - 301: Moved Permanently
  - 302 - Moved
- **4XX**: Erro do cliente
  - 400 - Bad Request
  - 401 - Unauthorized
  - 403 - Forbidden
  - 404 - Not Found
  - 422 - Unprocessable Entity
- **5XX**: Erro no servidor - o servidor falhou ao concluir a solicitação
  - 500 - Internal Server Error
  - 502 - Bad Gateway

### 📌 Parâmetros das Requisições

- **Header Params** ⇒ parâmetros que vão no cabeçalho

- **Query Params** ⇒ inseridos no final da requisição
  - http://enderecoservidor.com.br/v1/users?page=2&limit=50
  - **Chave** ▶️ page/limit
  - **Valor** ▶️ 2/50
  - **Separação** ▶️ &
- **Route Params** ⇒ parâmetros no meio da rota
  - http://enderecoservidor.com.br/v1/users/{id}
- **Body Params** ⇒ parâmetros no corpo da requisção

### 📌 Boas práticas API Rest

- A utilização correta dos métodos HTTP
- A utilização correta dos status no retorno das respostas
- Padrão de nomenclatura
  - Busca de usuários - GET
    - http://enderecoservidor.com.br/v1/users
  - Busca de usuário por id - GET
    - http://enderecoservidor.com.br/v1/users/1
  - Busca de endereço do usuário - GET
    - http://enderecoservidor.com.br/v1/users/1/address
  - Deleção de um usuário - DELETE
    - http://enderecoservidor.com.br/v1/users/1
  - Atualização do status do usuário - PATCH
    - http://enderecoservidor.com.br/v1/users/1/status

## 🛠 Ferramentas

Aplicação desenvolvida usando as seguintes tecnologias:

- [!NodeJS](https://nodejs.org/en/)
- [!Yarn](https://yarnpkg.com/)
- [!Express](https://expressjs.com/pt-br/)
- [!Nodemon](https://www.npmjs.com/package/nodemon)
- [![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fnlnadialigia%2Fignite-fundamentos-nodejs%2Fmain%2FInsomnia.json%3Ftoken%3DAP4MEK64F5U2CVWKPMXAQQ3AI6SY4)

### Programas e configurações necessárias

- Instalar LTS NodeJS versão;
- Instalar um um editor de código-fonte recomendação Visual Studio Code;
- Yarn opcional
- Express
- Nodemon
- Insomnia

## 🚀 Iniciar Aplicação

### **Clone o projeto e acesse a pasta.**

```bash
$ git clone https://github.com/trilha-nodejs/fundamentos-nodejs.git
$ cd trilha-nodejs/fundamentos-nodejs
```

---

### **Instalar dependências e iniciar projeto**

```bash
$ yarn # ou npm install
$ yarn dev # ou npm run dev
```

---

&nbsp;

## 📁 Criar projeto do zero

### 📚 Como criar a estrutura do projeto

- criar pasta do projeto - **fundamentos-nodejs**
- iniciar o projeto

  ```bash
  yarn init -y
  ```

- Minhas configurações
- instalar express

  ```bash
  yarn add express
  ```

- incluir a rota get e o padrão do app

  ```js
  import express from "express";

  const app = express();

  app.get("/", (request, response) => {
    return response.json({ message: "Hello World Ignite!" });
  });

  app.listen(3333);
  ```

### 📚 Adicionando o Nodemon na aplicação

- instalar como dependência de desenvolvimento

  ```bash
  yarn add nodemon -D
  ```

- incluir no package.json o **script para rodar o nodemon**
  ```bash
   "scripts": {
   "dev": "nodemon -L src/index.js"
  }
  ```

### 📚 Utilizando os métodos HTTP

- GET - Buscar uma informação dentro do servidor
- POST - Inserir uma informação no servidor
- PUT - Alterar uma informação no servidor
- PATCH - Alterar uma informação específica no servidor
- DELETE - Deletar uma informação no servidor

```js
app.get("/courses", (request, response) => {
  return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (request, response) => {
  return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

app.patch("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

app.delete("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 7", "Curso 4"]);
});
```

### 📚 Utilizando o insomnia

- criação das rotas no Insomnia

<p align="center">
<img src="./assets/insomnia.gif" alt="Insomnia">
</p>

### 📚 Tipos de parâmetros

- ROUTE PARAMS ⇒ Identificar um recurso para editar, deletar ou buscar

  ```jsx
  app.put("/courses/:id", (request, response) => {
    const params = request.params;
    console.log(params);
    return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
  });
  ```

- QUERY PARAMS ⇒ Paginação, filtro

  ```jsx
  app.get("/courses", (request, response) => {
    const query = request.query;
    console.log(query);
    return response.json(["Curso 1", "Curso 2", "Curso 3"]);
  });
  ```

  - Exemplo: `url/courses?page=1&order=des`
  - Opcional

- BODY PARAMS ⇒ Objetos para inserção ou alteração de algum recurso

  ```jsx
  app.post("/courses", (request, response) => {
    const body = request.body;
    console.log(body);
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
  });
  ```

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para 
mais detalhes.

&nbsp;

Feito com 💜 by Felipe Vicente👋

&nbsp;

## My LinkedIn - [![Linkedin Badge](https://img.shields.io/badge/-FelipeVicente-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/felipe-gomes-vicente/)](https://www.linkedin.com/in/felipe-gomes-vicente/)
