var Request = require('request');
const ruta = 'https://ws3.pide.gob.pe/Rest/Sunarp';
const getPersonaNatural = (req, res) => {
    const tipoParticipante = req.query.tipoParticipante;
    const apellidoPaterno = req.query.apellidoPaterno;
    const apellidoMaterno = req.query.apellidoMaterno;
    const nombres = req.query.nombres;
    const razonSocial = req.query.razonSocial
    let url = `${ruta}/Titularidad?tipoParticipante=${tipoParticipante}&apellidoPaterno=${apellidoPaterno}&apellidoMaterno=${apellidoMaterno}&nombres=${nombres}&razonSocial=${razonSocial}`;
    Request.get(`${url}`, (error, response, body) => {
        if (error) {
            res.send(error);
        } else {
            console.log(body);
            res.send(body);
        }
    })
}

const getPersonaJuridica = (req, res) => {
    const razonSocial = req.query.razonSocial
    let url = `${ruta}/PJRazonSocial?razonSocial=${razonSocial}`;
    console.log(url);
    
    Request.get(`${url}`, (error, response, body) => {
        if (error) {
            res.send(error);
        } else {
            console.log(body);
            res.send(body);
        }
    })
}

const listarAsientos = (req, res) => {
    const zona = req.query.zona;
    const oficina = req.query.oficina;
    const partida = req.query.partida;
    const registro = req.query.registro;
    console.log(zona, oficina, partida, registro);

    let url = `${ruta}/ListarAsientos?zona=${zona}&oficina=${oficina}&partida=${partida}&registro=${registro}`;
    console.log(url);
    
    Request.get(`${url}`, (error, response, body) => {
        if (error) {
            res.send(error);
        } else {
            res.send(body);
        }
    })
}

const getVehiculo = (req, res) => {
    const zona = req.query.zona;
    const oficina = req.query.oficina;
    const placa = req.query.placa;
    let url = `${ruta}/VerDetalleRPV?zona=${zona}&oficina=${oficina}&placa=${placa}`;
    console.log(url);
    
    Request.get(`${url}`, (error, response, body) => {
        if (error) {
            console.log(error);

            res.send(error);
        } else {
            console.log(body);

            res.send(body);
        }
    })
}
const getOficinas = (req, res) => {
    let url = `${ruta}/Oficinas`;
    Request.get(`${url}`, (error, response, body) => {
        if (error) {
            res.send(error);
        } else {
            res.send(body);
        }
    })
}


const getRegistroAsiento = (req, res) => {
    const transaccion = req.query.transaccion;
    const idImagen = req.query.idImg;
    const tipo = req.query.tipo;
    const nroTotalPag = req.query.nroTotalPag;
    const paginaRef = req.query.nroPagRef;
    const pagina = req.query.pagina;
    console.log(req.query);

    console.log(transaccion, idImagen, tipo, nroTotalPag, paginaRef, pagina);

    let url = `${ruta}/VerAsientos?transaccion=${transaccion}&idImg=${idImagen}&tipo=${tipo}&nroTotalPag=${nroTotalPag}&nroPagRef=${paginaRef}&pagina=${pagina}`;
    Request.get(`${url}`, (error, response, body) => {
        if (error) {
            res.send(error);
        } else {
            res.send(body);
        }
    })
}

module.exports = {
    getPersonaNatural,
    getPersonaJuridica,
    listarAsientos,
    getRegistroAsiento,
    getVehiculo,
    getOficinas
}