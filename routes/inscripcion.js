module.exports = app => {
    const inscripcion = require("../controllers/inscripcion")
    let router = require("express").Router()

    router.post("/insertins", inscripcion.create)
    router.post("/findins", inscripcion.findAll)
    router.post("/deletins", inscripcion.baja)
    router.put("/kit", inscripcion.opdate)

    app.use('/vd', router)
}