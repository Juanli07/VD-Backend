const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
const { generateHash } = require('../utils/genarateHash')

// Creando y guardando un nuevo usuario
exports.create = (req, res) => {
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
      res.send(data)
  }).catch(err => {
      res.status(500).send({
          message: 
            err.message || "Some error ocurred while creating a new user"
      })
  })

};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  User.findAll().then( data => {
      res.send(data)
  }).catch(err => {
      res.status(500).send({
          message:
            err.message || "Some error ocurred while retrieving users"
      })
  })
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
}