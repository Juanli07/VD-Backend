const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

app.use(cors());

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(bodyParser.json( {limit: '50mb', extended: true}))

const db = require("./models")
db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.");
});

require("./routes/user")(app)
require("./routes/empresa")(app)
require("./routes/cont_emergencia")(app)
require("./routes/kits")(app)
require("./routes/inscripcion")(app)
require("./routes/convocatorias")(app)
require("./routes/participante")(app)

app.listen(port, () => {
    console.log(`Corriendo en http://localhost:${port}/vd`)
})