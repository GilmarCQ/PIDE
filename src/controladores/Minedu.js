var request = require('request');
const ruta = 'https://ws3.pide.gob.pe/Rest/Minedu';

const getTitulos = (req, res) => {
    const nuDniConsulta = req.query.nroDocumento;
    let url = `${ruta}/Titulo?nroDocumento=${nuDniConsulta}`;    
    request.get(`${url}`, (error, response, body) => {
        if (error) {
            res.send(error);
        } else {
            res.send(body);
        }
    })
}

module.exports = {
    getTitulos
}