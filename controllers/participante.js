const db = require("../models");
const Participante = db.participante;
const Op = db.Sequelize.Op;

let create = (req, res) => {
    if(!req.body.email){
        res.status(400).send({
            message: "Content can not empty!"
        });
        return
    }

    let participante = {
        email: req.body.email,
        nombre: req.body.nombre,
        cel: req.body.cel,
        genero: req.body.genero,
        fecha_nacimiento: req.body.fecha_nacimiento,
        club: req.body.club,
        ref_ce: req.body.ref_ce,
    }

    Participante.create(participante).then( data => {
        res.status(200).send({
            message: "inscripcion exitosa",
        })
    }).catch( err => {
        res.status(500).send({
            message: "Error, no se realizo el registro"
        })
    })
}

module.exports = {
    create
}