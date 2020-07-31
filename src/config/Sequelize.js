const Sequelize = require('sequelize');

const usuarioModel = require('../models/Usuario');
const moduloModel = require('../models/Modulo');
const menuModel = require('../models/Menu');
const usuarioMenuModel = require('../models/UsuarioMenu');

// const conexion = new Sequelize(
//     'PIDE', 'postgres', 'root', {
//     host: 'localhost',
//     dialect: 'postgres',
//     port: '5433',
//     dialectOptions: {
//         useUTC: false,
//         dateStrings: true,
//         typeCast: true
//     },
//     // timezone: '-05:00'
// }
// )

// const Usuario = usuarioModel(conexion);
// const Modulo = moduloModel(conexion);
// const Menu = menuModel(conexion);
// const UsuarioMenu = usuarioMenuModel(conexion);


//  Relaciones
Modulo.hasMany(Menu, { foreignKey: 'idModulo' });
Menu.belongsTo(Modulo, { foreignKey: 'idModulo' })
Menu.belongsToMany(Usuario, { through: 'usuario_menu',foreignKey: 'idMenu' });
Usuario.belongsToMany(Menu, { through: 'usuario_menu',foreignKey: 'idUsuario' });

module.exports = {
    // conexion: conexion,
    Usuario: Usuario,
    Modulo: Modulo,
    Menu: Menu,
    UsuarioMenu: UsuarioMenu
}
