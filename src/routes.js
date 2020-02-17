const express = require('express');
const routes = express.Router();

const PessoaController = require("./controllers/PessoaController");

routes.get("/pessoas", PessoaController.index); 
routes.get("/pessoa/:id", PessoaController.detalhes); 
routes.post("/pessoa", PessoaController.criarPessoa);
routes.put("/pessoa/:id", PessoaController.updatePessoa);
routes.delete("/pessoa/:id", PessoaController.deletaPessoa);

module.exports = routes;


