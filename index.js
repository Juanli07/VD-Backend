const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

var corsOptions = {
	origin: "http://localhost:3000"
};
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const db = require("./models")
db.sequelize.sync({ force: false }).then(() => {
	console.log("Drop and re-sync db.");
});

require("./routes/user")(app)
require("./routes/empresa")(app)

app.listen(port, () => {
	console.log(`Corriendo en http://localhost:${port}/vd`)
})

