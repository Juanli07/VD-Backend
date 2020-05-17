const Sequelize = require("sequelize")
const sequelize = new Sequelize("vd", "root", "", {
    host: "localhost",
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
db.convocatorias = require("./convocatorias")(sequelize, Sequelize)
    //Agregar modelos
module.exports = db