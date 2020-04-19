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
            message: "Contacto de emergencia crado exitosamente"
        })
    }).catch((err) => {
        res.status(400).send({
            message: err.message || "Contacno no creado"
        })
    })

};
module.exports = {
    create
}