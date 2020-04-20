const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
const { generateHash, checkHash } = require('../utils/genarateHash')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Creando y guardando un nuevo usuario
let create = (req, res) => {
  //Validando request
  if(!req.body.email){
      res.status(400).send({
          message: "Content can not empty!"
      });
      return
  }
  
  //Creando
  let user = {
      email: req.body.email,
      nombre: req.body.nombre,
      contrasena: generateHash(req.body.contrasena),
      cel: req.body.cel,
      genero: req.body.genero,
      fecha_nacimiento: req.body.fecha_nacimiento,
      isAdmin: req.body.isAdmin,
      salario: req.body.salario,
      ref_ce: req.body.ref_ce
  }

  //Guardando
  User.create(user).then( data => {
      res.status(200).send({
          message: "Creacion de usuario exitosa"
      })
  }).catch(err => {
      res.status(500).send({
          message: 
            err.message || "Some error ocurred while creating a new user"
      })
  })

};

// Retrieve all Tutorials from the database.
let findAll = (req, res) => {
    let email = req.body.email
    email = email ? { email: { [Op.like]: `%${email}%` } } : null;
    User.findAll( {where: email }).then( (user) => {
        if(user){
            if(checkHash(req.body.contrasena, user[0].contrasena)){
                res.status(200).send({
                    message: "Contraseña correcta"
                })
            }
        }
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error ocurred while retrieving users"
        })
    })
};

// Find a single Tutorial with an id
let findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
let update = (req, res) => {
  
};
let sendMsg = (req, res) => {
    res.send({message :  "hola mundo"})
}

module.exports = {
    create,
    findAll,
    sendMsg
}
