let jwt = require('jwt-simple')
let moment = require('moment')
let { key } = require('../config')

function isAuth(req, res, next){
    if(!req.headers.authorization){
        return res.status(403).send({
            message: 'No tienes autorización'
        })
    }
    let token = req.headers.authorization.split(" ")[1]
    let payload;
    try{
        payload = jwt.decode(token, key)
    }catch(err){
        return res.status(403).send({
            message: 'No tienes autorización'
        })
    }

    if(payload.exp <= moment().unix()){
        return res.status(401).send({
            message: 'El token ha expirado'
        })
    }
    req.user = payload.sub
    next()
}

module.exports = {
    isAuth
}