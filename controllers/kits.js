const db = require("../models");
const Kits = db.kits;
const Op = db.sequelize.Op;

//crear nuevo kit

let create = (req, res)=>{
    //validar reques
    

    //crear
    let kits = {
    id: req.body.id,
    id_conv: req.body.id_convocatoria,
    requisitos: req.body.requisitos    
    }


Kits.create(kits).then(data =>{
    res.status(200).send({
        message: "Creación exitosa"
    })
}).catch (err =>{
    res.status(500).send({
        message:
        err.message || "F vato, no funcionó"
    })
})
}

module.exports = {
    create
}