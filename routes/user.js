module.exports = app => {
    const user = require("../controllers/user")

    let router = require("express").Router()

    router.post("/user", user.create)
    router.post("/login", user.findAll)
    router.get("/", user.sendMsg)
    //put actualizar, delete eliminar, post insertar, get enviar datos

    app.use('/vd', router)
}