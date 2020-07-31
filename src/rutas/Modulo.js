const express = require('express');
const Modulo = require('../controladores/Modulo');
const moduloRouter = express.Router();

moduloRouter.post('/crear', Modulo.crearModulo);
moduloRouter.get('/listar', Modulo.listarModulos);
moduloRouter.delete('/eliminar/:id', Modulo.eliminarModulo);

module.exports = {moduloRouter};
