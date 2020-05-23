const db = require("../models");
const Empresa = db.empresa;
const Op = db.Sequelize.Op;


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

//Actualizacion/edicion
let update = (req, res) => {
    let id = req.body.id
    Empresa.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Empresa actualizado correctamente."
                });
            } else {
                res.send({
                    message: `No es posible actualizar la empresa cin id=${id}. Es probable que el contacto no se haya encontrado o no existe`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al acutualizar la empresa con el id=" + id
            });
        });

};
//eliminar

let delet = (req, res) => {
    let id = req.body.id
    Empresa.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                Empresa.update({
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
                    message: "Empresa eliminada correctamente."
                });
            } else {
                res.send({
                    message: `No es posible eliminar la empresa cin id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al eliminar la empresa con el id=" + id
            });
        });
    

};

//Recuperar todos las Empresas
let findAll = (req,res)=>{
    let title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Empresa.findAll({ where: condition, active: true })
        .then(data => {
            res.send(data)                                
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Empresas."
            })
        })
};

//Recuperar una sola empresa
let findOne = (req,res) => {
    let id = req.body.id;

    Empresa.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al buscar la empresa con el id=" + id
            });
        });
};

module.exports={
    create,
    update,
    delet,
    findAll,
    findOne
}
