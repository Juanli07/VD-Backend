module.exports = app => {
    const cont_emergencia = require("../controllers/cont_emergencia")
    let router = require("express").Router()

    router.post("/insert", cont_emergencia.create)
    router.put("/update", cont_emergencia.update)
    router.post("/find", cont_emergencia.findAll)
    router.delete("/delete", cont_emergencia.delet)

    app.use('/vd', router)
}