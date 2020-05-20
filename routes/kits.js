module.exports = app=>{
    const kits = require("../controllers/kits")
    let router = require("express").Router()

    router.post("/createKits",kits.create)

    app.use('/vd',router)
}