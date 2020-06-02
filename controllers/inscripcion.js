const db = require("../models");
const Inscripcion = db.inscripcion;
const Participante = db.participante;
const Op = db.Sequelize.Op;


//Creacion de la inscripcion
let create = (req, res) => {
    let inscripcion = {
        id: req.body.id,
        id_convocatoria: req.body.id_convocatoria,
        id_usuario: req.body.id_usuario,
        fecha: req.body.fecha,
        modalidad: req.body.modalidad,
        numero_participante: req.body.numero_participante,
        kitState: req.body.kitState
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
let baja = (req, res) => {
    let id = req.body.id
    Inscripcion.update(req.body, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                Inscripcion.update({
                    active: false,
                }, {
                    where: {
                        id: id,
                        active: {
                            [Op.ne]: false
                        }
                    }
                });
                res.send({
                    message: "Inscripción dada de baja"
                });
            } else {
                res.send({
                    message: `No es posible dar de baja a la inscripción: ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al dar de baja a la inscripción: " + id
            });
        });
};
let opdate = (req, res) => {
    Inscripcion.update({
        kitStatus: req.body.kitStatus
    }, {
        where: {
            id: req.body.id
        }
    }).then( data => {
      res.status(200).send()
    }).catch( err => {
      res.status(500).send({
          message:
              err.message || "Some error ocurred while retrieving users"
      })
    })
}
let sendReport =  async (req, res) => {
    let filters = {}
    let inscripcion = await Inscripcion.findAll({where: {id_convocatoria: req.body.id_convocatoria}})
    let part = new Array()
    for(const insc in inscripcion){
        filters.id = inscripcion[insc].dataValues.id_usuario
        try{
            let pa = await Participante.findOne({
                where: filters
            })
            part.push(pa)
        }catch(error){
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while retrieving users"
            })
        }
    }
    res.status(200).send( {inscripcion, part});
}

module.exports = {
    create,
    findAll,
    baja,
    opdate,
    sendReport
}