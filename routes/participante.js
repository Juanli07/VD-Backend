module.exports = app => {
    const participante = require("../controllers/participante")

    let router = require("express").Router()

    router.post("/participante", participante.create)
    //put actualizar, delete eliminar, post insertar, get enviar datos

    app.use('/vd', router)
}