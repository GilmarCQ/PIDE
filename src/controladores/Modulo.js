const { Modulo } = require('../config/Sequelize');

const crearModulo = (req, res) => {
    let modulo = req.body;
    console.log(modulo);
    Modulo.findOne({
        where: {
            nombre: modulo.nombre.toUpperCase()
        }
    })
        .then(moduloEncontrado => {
            if (moduloEncontrado) {
                res.status(409)
                    .json({
                        ok: false,
                        mensaje: "El modulo ya existe"
                    })
            } else {
                moduloEncontrado = new Modulo();
                moduloEncontrado.nombre = modulo.nombre.toUpperCase();
                moduloEncontrado.estado = true;
                moduloEncontrado.save()
                    .then(moduloCreado => {
                        res.status(201)
                            .json({
                                ok: true,
                                contenido: moduloCreado,
                                mensaje: "Modulo creado correctamente"
                            })
                    })
                    .catch(error => {
                        res.status({
                            ok: false,
                            contenido: error,
                            mensaje: `No se puedo guardar el modulo`
                        })
                    })
            }
        })
        .catch(error => {
            res.status({
                ok: false,
                mensaje: `Ha ocurrido un error: ${error}`
            })
        })

}

const listarModulos = (req, res) => {
    Modulo.findAll({
        where: {
            estado: true
        }
    })
        .then(modulos => {
            if (modulos.length) {
                res.status(201)
                    .json({
                        ok: true,
                        contenido: modulos
                    })
            } else {
                res.status(404)
                    .json({
                        ok: false,
                        contenido: modulos,
                        mensaje: "No se encontro modulos"
                    })
            }
        })
}

const eliminarModulo = (req, res) => {
    let modulo = req.params;
    console.log(modulo);
    Modulo.findOne({
        where: {
            id: modulo.id,
            estado: true
        }
    })
        .then(moduloEncontrado => {
            if (moduloEncontrado) {
                moduloEncontrado.estado = false;
                moduloEncontrado.save()
                    .then(moduloEliminado => {
                        res.status(200)
                            .json({
                                ok: true,
                                mensaje: "Modulo eliminado correctamente."
                            })
                    })
            } else {
                res.status(404)
                    .json({
                        ok: false,
                        mensaje: "Modulo a eliminar no encontrado."
                    })
            }
        })
}

module.exports = {
    crearModulo,
    listarModulos,
    eliminarModulo
}