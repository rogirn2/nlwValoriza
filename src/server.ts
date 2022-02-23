import express from "express";

// @types/express
const app = express();

/**
 * GET    => Buscar uma informação
 * POST   => Inserir/criar uma informação
 * PUT    => Alterar uma informação
 * DELETE => Remover uma informação
 * PATCH  => Alterar uma informação específica
 */

app.get('/teste', (request, response) => {
    // Request => Entrando
    // Response => Saindo
    return response.send("Olá, mundo!");
});

app.post("/teste-post", (request, response) => {
    return response.send("Olá, Mundo POST"!);
});

//http://localhost:3000
app.listen(3000, () => console.log("Server is running"));