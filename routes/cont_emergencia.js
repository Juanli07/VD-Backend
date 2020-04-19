module.exports = app => {
    const cont_emergencia = require("../controllers/cont_emergencia")
    let router = require("express").Router()

    router.post("/cont_emergencia", cont_emergencia.create)

    app.use('/vd', router)
}