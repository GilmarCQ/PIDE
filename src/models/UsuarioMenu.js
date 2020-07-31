const sequelize = require('sequelize');

const usuarioMenu_model = (conexion) => {
    let usuarioMenuModel = conexion.define("usuario_menu", {}
    )
    return usuarioMenuModel;
}

module.exports = usuarioMenu_model;