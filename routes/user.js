module.exports = app => {
    const user = require("../controllers/user")
    const { isAuth } = require('../middlewares/auth')

    let router = require("express").Router()

    router.post("/user", user.create)
    router.post("/login", user.findAll)
    router.get("/", user.sendMsg)
    router.get("/auth", isAuth, (req, res) => {
        res.status(200).send({
            message: "Es correcto"
        })
    })
    //put actualizar, delete eliminar, post insertar, get enviar datos

    app.use('/vd', router)
}