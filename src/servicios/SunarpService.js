var http = require('http');

var host = 'https://ws3.pide.gob.pe/Rest/Sunarp';
var port = '4567';

const cargarSunarp = (next) => {
    var path = '/Titularidad?tipoParticipante=N&apellidoPaterno=PINTO&apellidoMaterno=REJAS&nombres=ARTURO ESTEBAN&razonSocial='
    var options = {
        host: host,
        port: port,
        path: path,
        method: 'GET',
        encoding: null
    };
    invocarServicio(options, null, (users, err) => {
        if (err) {
            next(null, err);
        } else {
            next(users, null)
        }
    })
}

module.exports = {
    cargarSunarp
}


