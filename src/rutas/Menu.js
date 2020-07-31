const express = require('express');
const Menu = require('../controladores/Menu');
const menuRouter = express.Router();

menuRouter.post('/crear', Menu.crearMenu);
menuRouter.get('/listar/:id', Menu.listarMenu);

module.exports = {
    menuRouter
}
