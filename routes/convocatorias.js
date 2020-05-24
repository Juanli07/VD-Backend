module.exports = app =>{
    const conv_controller = require("../controllers/convocatorias")

    let router = require("express").Router()

    router.post("/insertconv",conv_controller.create),
    router.get("/convocatorias", conv_controller.get)
    app.use('/vd',router)
}

