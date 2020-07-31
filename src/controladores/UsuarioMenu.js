const { UsuarioMenu, Menu } = require('../config/Sequelize');

/**
 * Asignar menu a un usuario
 * @param {*} req 
 * @param {*} res 
 */
const asignarMenu = (req, res) => {
    let menuUsuario = req.body; 
    UsuarioMenu.build(menuUsuario).save()
        .then(menuAsignado => {
            res.status(201)
                .json({
                    ok: true,
                    contenido: menuAsignado,
                    mensaje: "El menu se asigno correctamente"
                })
        })
        .catch(error => {
            res.status(500).json({
                ok: false,
                contenido: error,
                mensaje: "Ha ocurrido un error al guardar el menu"
            })
        })


}

const listarMenuPorUsuario = (req, res) => {

}

const listarModuloPorUsuario = (res, req) => {

}

module.exports = {
    asignarMenu,
    listarMenuPorUsuario,
    listarModuloPorUsuario
}
