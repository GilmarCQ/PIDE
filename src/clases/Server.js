const express = require('express');
const bodyParser = require('body-parser');

// const { conexion } = require('./../config/Sequelize');
// const { usuarioRouter } = require('../rutas/Usuario')
// const { moduloRouter } = require('../rutas/Modulo');
// const { menuRouter } = require('../rutas/Menu');
// const { usuarioMenuRouter } = require('../rutas/UsuarioMenu')
const { sunarpRouter } = require('../rutas/Sunarp');
const { reniecRouter } = require('../rutas/Reniec');
const { mineduRouter } = require('../rutas/Minedu');
const { suneduRouter } = require('../rutas/Sunedu');

class Server {
    constructor() {
        this.app = express();
        this.puerto = process.env.PORT || 5000;
        this.habilitarCORS();
        // this.corsOptions = {
        //     origin: 'http://127.0.0.1:5500',
        //     optionsSuccessStatus: 200
        // }
        this.configurarBodyParser();
        this.cargarRutas();
    }

    habilitarCORS() {
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            // res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
            // res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            // res.header('Allow', 'GET, POST, OPTION, PUT, DELETE');
            next();
        });
    }

    configurarBodyParser() {
        this.app.use(bodyParser.json());
    }

    cargarRutas() {
        this.app.get('/', (req, res) => {
            res.status(200).send('La API funciona!!!');
        })
        // this.app.use('/', usuarioRouter, menuRouter);
        // this.app.use('/modulo', moduloRouter);
        // this.app.use('/menu', menuRouter);
        // this.app.use('/login', usuarioMenuRouter);
        this.app.use('/Sunarp', sunarpRouter );
        this.app.use('/Reniec', reniecRouter );
        this.app.use('/Minedu', mineduRouter );
        this.app.use('/Sunedu', suneduRouter );
    }
    
    start() {
        this.app.listen(this.puerto, () => {
            console.log('Todo operativo', this.puerto);
        })
        // conexion.sync({force: false}).then(() => {
        //     console.log("Base de datos sincronizada");
        // })
    }
}

module.exports = Server;
