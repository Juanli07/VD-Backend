module.exports = app => {
    const user = require("../controllers/user")
    const { isAuth } = require('../middlewares/auth')

    let router = require("express").Router()

    router.post("/user", user.create)
    router.post("/login", user.login)
    router.put("/isAdmin", user.findOne)
    router.put("/changestate", user.update)
    router.get("/", user.all)
    //IsAuth es el aunteticador, que se encarga de verificar si el token aun no ha expirado
    router.get("/auth", isAuth, (req, res) => {
        res.status(200).send({
            message: 'Access!'
        })
    })
    //put actualizar, delete eliminar, post insertar, get enviar datos

    app.use('/vd', router)
}