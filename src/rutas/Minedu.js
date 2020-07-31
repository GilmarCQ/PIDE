const express = require('express');
const Minedu = require('../controladores/Minedu');
const mineduRouter = express.Router();

mineduRouter.get('/Titulo', Minedu.getTitulos);

module.exports = {
    mineduRouter
}