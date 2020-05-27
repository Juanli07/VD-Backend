const db = require ("../models");
const convocatorias_model =db.convocatorias;
const Op=db.Sequelize.Op;

//creacion de convocatorias
let create =(req,res)=>{
    let convocatoria ={
        //id:req.body.id,
        id_empresa:req.body.id_empresa,
        titulo:req.body.titulo,
        banner:req.body.banner,
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
let get = (req, res) => {
    convocatorias_model.findAll({
        where: {
            fecha: {
                [Op.gt]: new Date()
            }
        }
    }).then(data => {
        res.status(200).send({
            data
        })
    }).catch(err => {
        res.status(400).send({})
    })
}

module.exports = {
    create,
    get
}