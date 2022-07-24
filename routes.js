const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const cadastrarController = require("./src/controllers/cadastrarController");
const entrarController = require("./src/controllers/entrarController");
const recSenhaController = require("./src/controllers/recSenhaController");
const usuarioController = require("./src/controllers/usuarioController");

route.get("/", homeController.home);

route.get("/cadastrar", cadastrarController.cadastrar);

route.get("/cadastro-finalizado", cadastrarController.cadastroFinalizado);

route.get("/entrar", entrarController.entrar);

route.get("/usuario", usuarioController.usuario);

route.get("/rec-senha", recSenhaController.recSenha);

route.get("/rec-senha-email", recSenhaController.recSenhaEmail);

module.exports = route;
