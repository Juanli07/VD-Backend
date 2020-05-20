module.exports = app =>{
    const empresa = require("../controllers/empresa")
    let router = require("express").Router()

    router.post("/empresa", empresa.create)
    router.put("/update/empresa", empresa.update)
    router.post("/delete/empresa", empresa.delet)
    router.get("/findAll/empresa", empresa.findAll)
    router.get("/findOne/empresa", empresa.findOne)

    app.use('/vd', router)
};

