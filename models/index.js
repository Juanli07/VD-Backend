const { password } = require('../config')
const Sequelize = require("sequelize")
// mSk_5rt_ejmD^$EK
const sequelize = new Sequelize("labs_john", "john117", password, {
    host: "labs.devdesign.mx",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require("./user.js")(sequelize, Sequelize)
db.empresa = require("./empresa.js")(sequelize, Sequelize)
db.inscripcion = require("./inscripcion.js")(sequelize, Sequelize)
db.cont_emergencia = require("./cont_emergencia.js")(sequelize, Sequelize)
db.kits =require("./kits")(sequelize,Sequelize)
db.convocatorias = require("./convocatorias")(sequelize, Sequelize)
db.participante = require("./participante")(sequelize, Sequelize)
    //Agregar modelos
module.exports = db