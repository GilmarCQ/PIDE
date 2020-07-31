const express = require('express');
const Reniec = require('../controladores/Reniec');
const reniecRouter = express.Router();

reniecRouter.get('/Consultar', Reniec.getPersonaPorDni);

module.exports = {
    reniecRouter
}