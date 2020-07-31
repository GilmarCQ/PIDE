const express = require('express');
const UsuarioMenu = require('../controladores/UsuarioMenu');
const usuarioMenuRouter = express.Router();

usuarioMenuRouter.post("/asignar", UsuarioMenu.asignarMenu);

module.exports = {usuarioMenuRouter}
