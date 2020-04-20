const db = require("../models");
const Empresa = db.empresa;
const Op = db.Sequelize.Op;
//token???

//Crean y guardar empresas
let create = (req, res) =>{
    //validacion de request ???

    //creando empresa
    let empresa ={
        id: req.body.id,
        nombre: req.body.nombre,
        tel: req.body.tel,
        direccion: req.body.direccion,
        nombre_repe: req.body.nombre_repe
    }
    
    //Guardando
    Empresa.create(empresa).then((data) => {
        res.status(200). send({
            message: "Creacion de empresa exitosa"
        })
    }).catch((err) => {
        res.status(500).send({
            message:
            err.message || "no jalo chavo" 
        })       
    })

};

//token 2.0???
module.exports={
    create
}
