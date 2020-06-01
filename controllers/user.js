const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
const { generateHash, checkHash } = require('../utils/genarateHash')
const bcrypt = require('bcrypt')
const { createToken } = require('../utils/auth')

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
      isAdmin: req.body.isAdmin,
      salario: req.body.salario,
      ref_ce: req.body.ref_ce
  }

  //Guardando
  User.create(user).then( data => {
      user.contrasena = '?'
      res.status(200).send({
          message: "Creacion de usuario exitosa",
          token: createToken(user),
          user: user
      })
  }).catch(err => {
      res.status(500).send({
          message: 
            err.message || "Some error ocurred while creating a new user"
      })
  })

};

let login = (req, res) => {
    let email = req.body.email
    // email = email ? { email: { [Op.like]: `%${email}%` } } : null;
    User.findAll( {where: { email, active: true} }).then( (user) => {
        if(user.length >0 ){
            if(checkHash(req.body.contrasena, user[0].contrasena)){
                user[0].contrasena = '?'
                res.status(200).send({
                    token: createToken(user),
                    user: user[0]

                })
            }else{
                res.status(500).send({
                    message: 'Password incorrect'
                })
            }
        }else{
            res.status(403).send({
                message: "User not found"
            })
        }
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error ocurred while retrieving users"
        })
    })
};

let all = (req, res) => {
    User.findAll().then( user => {
        res.status(200).send({
            user
        })
    }).catch( err => {
        res.status(500).send({
            message:
                err.message || "Some error ocurred while retrieving users"
        })
    })
}

// Find a single Tutorial with an id
let findOne = (req, res) => {
  User.update({
      isAdmin: !req.body.isAdmin
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
};

// Update a Tutorial by the id in the request
let update = (req, res) => {
    User.update({
        active: req.body.active
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
};
let sendMsg = (req, res) => {
    res.send({message :  "hola mundo"})
}

module.exports = {
    create,
    login,
    sendMsg,
    all,
    findOne,
    update
}

