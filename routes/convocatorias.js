module.exports = app =>{
    const conv_controller = require("../controllers/convocatorias")

    let router = require("express").Router()

    router.post("/insertconv",conv_controller.create)
    app.use('/vd',router)
}

