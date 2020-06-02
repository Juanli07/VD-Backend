module.exports = app => {
    const inscripcion = require("../controllers/inscripcion")
    let router = require("express").Router()

    router.post("/insertins", inscripcion.create)
    router.post("/findins", inscripcion.findAll)
    router.post("/deletins", inscripcion.baja)
    router.put("/kit", inscripcion.opdate)
    router.get("/report", inscripcion.sendReport)

    app.use('/vd', router)
}