module.exports = app => {
    const cont_emergencia = require("../controllers/cont_emergencia")
    let router = require("express").Router()

    router.post("/insertcont", cont_emergencia.create)
    router.put("/updatecont", cont_emergencia.update)
    router.post("/findcont", cont_emergencia.findAll)
    router.delete("/deletecont", cont_emergencia.delet)

    app.use('/vd', router)
}