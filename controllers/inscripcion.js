const db = require("../models");
const Inscripcion = db.inscripcion;
const Op = db.Sequelize.Op;


//Creacion de la inscripcion
let create = (req, res) => {
    let inscripcion = {
        id: req.body.id,
        id_convocatoria: req.body.id_convocatoria,
        id_usuario: req.body.id_usuario,
        fecha: req.body.fecha,
        numero_participante: req.body.numero_participante
    }

    //Guardando
    Inscripcion.create(inscripcion).then((data) => {
        res.status(200).send({
            message: "Inscripción realizada correctamente"
        })
    }).catch((err) => {
        res.status(400).send({
            message: err.message || "Error en la inscripción"
        })
    })

};
//Encontrar 
let findAll = (req, res) => {
    let id = req.body.id
    id = id ? {
        id: {
            [Op.like]: `%${id}%`
        }
    } : null;
    Inscripcion.findAll({ where: id }).then((inscripcion) => {
        res.send(inscripcion);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Ocurrió un error en la búsqueda"
        })
    })
};

module.exports = {
    create,
    findAll,
}