module.exports = app => {
    const inscripcion = require("../controllers/inscripcion")
    let router = require("express").Router()

    router.post("/insertins", inscripcion.create)
    router.post("/findins", inscripcion.findAll)

    app.use('/vd', router)
}