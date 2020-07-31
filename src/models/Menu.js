const sequelize = require('sequelize');

const menu_model = (conexion) => {
    let menu = conexion.define("menu",
        {
            id: {
                primaryKey: true,
                autoIncrement: true,
                type: sequelize.INTEGER,
                allowNull: false
            },
            nombre: {
                type: sequelize.STRING,
                allowNull: false
            },
            descripcion: {
                type: sequelize.STRING,
                allowNull: false
            },
            estado: {
                type: sequelize.BOOLEAN,
                allowNull: false
            }
        },
        {
            tableName: "menu",
            timestamp: true
        }
    )
    return menu;
}
module.exports = menu_model;