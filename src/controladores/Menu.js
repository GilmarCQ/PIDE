const { Menu, Modulo } = require('../config/Sequelize');

const crearMenu = (req, res) => {
    let menu = req.body;
    Menu.build(menu).save()
        .then(menuCreado => {
            res.status(201)
                .json({
                    ok: true,
                    contenido: menuCreado,
                    mensaje: "El menu se creo correctamente"
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

const listarMenu = (req, res) => {
    let modulo = req.params;
    Modulo.findAll({
        include: [{
            model: Menu,
            attributes: {
                exclude: [ 'estado', 'createdAt', 'updatedAt']
            }
        }],
        where: {
            id: modulo.id,
            estado: true
        },
        attributes: {
            exclude: [ 'estado', 'createdAt', 'updatedAt']
        }
    })
        .then(menus => {
            if(menus == []) {
                res.status(200).json({
                    ok: true,
                    contenido: menus
                })  
            }
            console.log(menus);
            
            if(menus.length) {
                res.status(200).json({
                    ok: true,
                    contenido: menus
                })
            } else {
                res.status(200).json({
                    ok: false,
                    contenido: menus
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                ok: false,
                contenido: error,
                mensaje: "Error al momento de listar"
            })
        })
}

module.exports = {
    crearMenu,
    listarMenu
}