const db = require ("../models");
const convocatorias_model =db.convocatorias;
const Op=db.Sequelize.Op;

//creacion de convocatorias
let create =(req,res)=>{
    let convocatoria ={
        id:req.body.id,
        id_empresa:req.body.id_empresa,
        titulo:req.body.titulo,
        costo:req.body.costo,
        fecha:req.body.fecha,
        ref_modalidad:req.body.ref_modalidad,
        precio:req.body.precio,
        num_participantes:req.body.num_participantes
    }
    convocatorias_model.create(convocatoria).then((data)=>{
        res.status(200).send({
            message: "Convocatorias creada de manera exitosa"
        })
    }).catch((err)=>{
        res.status(400).send({
            message: err.message||"Convocatoria no creada"
        })
    })
};

module.exports = {
    create
}