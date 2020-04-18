module.exports = app =>{
    const empresa = require("../controllers/empresa")
    let router = require("express").Router()

    router.post("/empresa", empresa.create)

    app.use('/vd', router)
}