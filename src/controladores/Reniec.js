var parseString = require('xml2js').parseString;

var request = require('request');
const ruta = 'https://ws5.pide.gob.pe/Rest/Reniec';
const { DNI_USUARIO } = require('../utils/variables');
const { RUC_USUARIO } = require('../utils/variables');
const { CLAVE_RENIEC } = require('../utils/variables');

const getPersonaPorDni = (req, res) => {
    const nuDniConsulta = req.query.numeroDni;
    let url = `${ruta}/Consultar?nuDniConsulta=${nuDniConsulta}&nuDniUsuario=${DNI_USUARIO}&nuRucUsuario=${RUC_USUARIO}&password=${CLAVE_RENIEC}`;
    request.get(`${url}`, (error, response, body) => {
        if (error) {
            res.send(error);
        } else {
            res.send(body);
        }
    })
}

module.exports = {
    getPersonaPorDni
}