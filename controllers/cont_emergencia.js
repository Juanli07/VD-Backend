const db = require("../models");
const Cont_emergencia = db.cont_emergencia;
const Op = db.Sequelize.Op;


//Creacion de contactos de emergencia
let create = (req, res) => {
    let cont_emergencia = {
        id: req.body.id,
        email: req.body.email,
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        cel: req.body.cel
    }

    //Guardando
    Cont_emergencia.create(cont_emergencia).then((data) => {
        res.status(200).send({
            message: "Contacto de emergencia creado exitosamente"
        })
    }).catch((err) => {
        res.status(400).send({
            message: err.message || "Contacno no creado"
        })
    })

};
//Editar/actualizar
let update = (req, res) => {
    let id = req.body.id
    Cont_emergencia.update(req.body, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Contacto de emergencia actualizado correctamente."
                });
            } else {
                res.send({
                    message: `No es posible actualizar el contacto de emergencia cin id=${id}. Es probable que el contacto no se haya encontrado o no existe`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al acutualizar el contacto de emergencia con el id=" + id
            });
        });

};
//Encontrar 
let findAll = (req, res) => {
    let id = req.body.id
    id = id ? {
        id: {
            [Op.like]: `%${id}%`
        }
    } : null;
    Cont_emergencia.findAll({ where: id }).then((cont_emergencia) => {
        res.send(cont_emergencia);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error ocurred while retrieving users"
        })
    })
};
//Borrar, por alguna razon me marcaba error cuando ponia delete, asi que lo deje en delet
let delet = (req, res) => {
    let id = req.body.id;

    Cont_emergencia.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Contacto eliminado correctamente"
                });
            } else {
                res.send({
                    message: `No se puede eliminar el contacto con id=${id}. No se encontro!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al eliminar el contacto con id=" + id
            });
        });
};
module.exports = {
    create,
    update,
    findAll,
    delet
}