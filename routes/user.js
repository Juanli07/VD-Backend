module.exports = app => {
    const user = require("../controllers/user")

    let router = require("express").Router()

    router.post("/user", user.create)
    router.get("/user", user.findAll)

    app.use('/vd', router)
}