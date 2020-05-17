module.exports = app => {
    const inscripcion = require("../controllers/inscripcion")
    let router = require("express").Router()

    router.post("/insert", inscripcion.create)
    router.post("/find", inscripcion.findAll)

    app.use('/vd', router)
}