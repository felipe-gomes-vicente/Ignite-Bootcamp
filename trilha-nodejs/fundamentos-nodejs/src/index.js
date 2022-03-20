const express = require('express');

const app = express();

app.use(express.json());

// GET - Buscar uma informação dentro do servidor
app.get('/courses', (request, response) => {
  // Query params => Paginação / Filtro 
  const query = request.query;
  console.log(query);
  return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

// POST - Inserir uma informação no servidor
app.post('/courses', (request, response) => {
  // Body params => Os objetos inserção/alteração
  const body = request.body;
  console.log(body);
  return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4", ]);
});

// PUT - Alterar uma informação no servidor
app.put('/courses/:id', (request, response) => {
  //Route Params => Identificar um recurso editar/deletar/buscar
  const { id } = request.params; // desestruturar
  console.log(id);
  // const params = request.params;
  // console.log(params);
  return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4", ]);
});

// PATCH - Alterar uma informação especifica
app.patch('/courses/:id', (request, response) => {
  return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4", ]);
});

// DELETE - Deletar uma informação no servidor
app.delete('/courses/:id', (request, response) => {
  return response.json(["Curso 6", "Curso 2", "Curso 4", ]);
});

// localhost:3333
app.listen(3333);