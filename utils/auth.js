const jwt = require('jwt-simple')
const moment = require('moment')
const { key } = require('../config')
 
function createToken(user){
    const payload = {
        sub: user.id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix()
    }
    return jwt.encode(payload, key)
}

module.exports = {
    createToken
} 