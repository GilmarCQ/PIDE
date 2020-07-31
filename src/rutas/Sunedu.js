const express = require('express');
const Sunedu = require('../controladores/Sunedu');
const suneduRouter = express.Router();

suneduRouter.get('/Grados', Sunedu.getTitulos);

module.exports = {
    suneduRouter
}