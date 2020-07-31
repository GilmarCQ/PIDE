var request = require('request');
const ruta = 'https://ws3.pide.gob.pe/Rest/Sunedu';
const { USUARIO_SUNEDU } = require('../utils/variables');
const { CLAVE_SUNEDU } = require('../utils/variables');
const { ID_ENTIDAD_SUNEDU } = require('../utils/variables');
const { MAC_SERVER } = require('../utils/variables');
const { IP_SERVER } = require('../utils/variables');

const getTitulos = (req, res) => {
    const nroDocIdentidad = req.query.nroDocIdentidad;
    let url = `${ruta}/Grados?usuario=${USUARIO_SUNEDU}&clave=${CLAVE_SUNEDU}&idEntidad=${ID_ENTIDAD_SUNEDU}&fecha=20200301&hora=1310&mac_wsServer=${MAC_SERVER}&ip_wsServer=${IP_SERVER}&nroDocIdentidad=${nroDocIdentidad}&ip_wsUser=${IP_SERVER}`;
    console.log(url);
    
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