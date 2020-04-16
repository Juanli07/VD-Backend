const Sequelize = require("sequelize")
const sequelize = new Sequelize("vd", "root", "123", {
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
module.exports = db