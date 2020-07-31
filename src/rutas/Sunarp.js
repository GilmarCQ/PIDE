const express = require('express');

const Sunarp = require('../controladores/Sunarp');
const sunarpRouter = express.Router();

sunarpRouter.get('/titularidadPN', Sunarp.getPersonaNatural);
sunarpRouter.get('/titularidadPJ', Sunarp.getPersonaJuridica);
sunarpRouter.get('/listarAsientos', Sunarp.listarAsientos);
sunarpRouter.get('/verAsiento', Sunarp.getRegistroAsiento);
sunarpRouter.get('/verVehiculo', Sunarp.getVehiculo);
sunarpRouter.get('/Oficinas', Sunarp.getOficinas);


module.exports = {
    sunarpRouter
}
