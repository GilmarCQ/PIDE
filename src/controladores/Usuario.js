const { Usuario } = require('../config/Sequelize');

const RegistrarUsuario = (req, res) => {
    let objUsuario = req.body;
    Usuario.findOne({
        where: { email: objUsuario.email }
    })
        .then(usuarioEncontrado => {
            if (usuarioEncontrado) {
                res.status(200)
                    .json({
                        ok: false,
                        mensaje: 'El usuario ya se enuentra registrado'
                    })
            } else {
                let usuarioCreado = Usuario.build(objUsuario);
                usuarioCreado.setSaltAndHash(objUsuario.password);
                usuarioCreado.save().then(nuevoUsuario => {
                    res.status(201).json({
                        ok: true,
                        contenido: nuevoUsuario,
                        mensaje: 'Usuario Creado exitosamente'
                    })
                })
            }
        })
}

const Login = (req, res) => {
    let { objUsuario } = req.body;
    Usuario.findOne({
        where: {
            email: objUsuario.correo
        }
    })
        .then(usuarioEncontrado => {
            if (usuarioEncontrado) {
                let resultado = usuarioEncontrado.validarPassword(objUsuario.password);
                if (resultado) {
                    let token = usuarioEncontrado.generarJWT();
                    res.status(200)
                        .json({
                            ok: true,
                            contenido: usuarioEncontrado.nombre + ' ' + usuarioEncontrado.apellidos,
                            mensaje: 'Usuario correvtamente logueado',
                            token: token
                        })
                } else {
                    res.status(404)
                        .json({
                            ok: false,
                            mensaje: 'Usuario o contraseña incorrectos'
                        })
                }
            } else {
                res.status(404)
                    .json({
                        ok: false,
                        mensaje: 'Usuario o contraseña incorrectos'
                    })
            }
        })
}

const ActualizarContraseña = (req, res) => {
    let objUsuario = req.body;
    console.log(objUsuario);
    Usuario.findOne({
        where: {
            email: objUsuario.email
        }
    })
        .then(usuarioEncontrado => {
            if (usuarioEncontrado) {
                let resultado = usuarioEncontrado.validarPassword(objUsuario.password);
                if (resultado) {
                    usuarioEncontrado.setSaltAndHash(objUsuario.passwordNuevo);
                    usuarioEncontrado.save()
                        .then(usuarioActualizado => {
                            res.status(201)
                                .json({
                                    ok: true,
                                    mensaje: 'Datos actualizados correctamente'
                                })
                        })
                } else {
                    res.status(404)
                        .json({
                            ok: false,
                            mensaje: 'La contraseña anterior es incorrecta'
                        })

                }
            } else {
                res.status(404)
                    .json({
                        ok: false,
                        mensaje: 'No se tiene creado un usuario con ese correo'
                    })
            }
        })


}
module.exports = {
    RegistrarUsuario,
    Login,
    ActualizarContraseña
}