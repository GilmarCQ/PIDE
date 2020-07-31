const sequelize = require('sequelize');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const usuario_model = (conexion) => {
    let usuario = conexion.define("usuario",
        {
            id: {
                primaryKey: true,
                autoIncrement: true,
                type: sequelize.INTEGER,
                allowNull: false
            },
            nombre: {
                type: sequelize.STRING(50),
                allowNull: false
            },
            apellidos: {
                type: sequelize.STRING(50),
                allowNull: false
            },
            email: {
                type: sequelize.STRING(50),
                allowNull: false,
                unique: true
            },
            fono: {
                type: sequelize.STRING(20),
                allowNull: true
            },
            hash: {
                type: sequelize.TEXT,
                allowNull: false
            },
            salt: {
                type: sequelize.TEXT,
                allowNull: false
            },
            tipo: {
                type: sequelize.STRING,
                allowNull: false
            },
        },
        {
            tableName: "usuario",
            timestamps: true
        }
    );
    usuario.prototype.setSaltAndHash = function (password) {
        this.salt = crypto.randomBytes(16).toString('hex');
        this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    };

    usuario.prototype.validarPassword = function (password) {
        let hashTemporal = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
        if (hashTemporal === this.hash) {
            return true;
        } else {
            return false;
        }
    }

    usuario.prototype.generarJWT = function () {
        let payload = {
            id: this.usu_id,
            nombre: `${this.nombre} ${this.apellidos}`,
            tipo: this.tipo
        };
        let token = jwt.sign(payload, 'incakola', { expiresIn: '1h' }, { algorithm: 'RS256' });
        return token;
    }
    return usuario;
};

module.exports = usuario_model;