const sequelize = require('sequelize');

const modulo_model = (conexion) => {
    let modulo = conexion.define("modulo",
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
            estado: {
                type: sequelize.BOOLEAN,
                allowNull: false
            }
        },
        {
            tableName: "modulo",
            timestamp: true
        }
    );

    return modulo;

}

module.exports = modulo_model;