const express = require('express');
const Usuario = require('../controladores/Usuario');
const usuarioRouter = express.Router();

usuarioRouter.post('/registrar', Usuario.RegistrarUsuario);
usuarioRouter.post('/login', Usuario.Login);
usuarioRouter.put('/actualizarPassword', Usuario.ActualizarContraseña);

module.exports = {usuarioRouter};
