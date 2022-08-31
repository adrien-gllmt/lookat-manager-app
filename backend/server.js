const express = require("express");
const cors = require("cors");
const app = express();
let corsOptions = {
    origin: ["http://localhost:3000", "https://www.adrien-guillemot.fr", "https://adrien-guillemot.fr", "https://dev.adrien-guillemot.fr"]
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my app !" });
});

const db = require("./api/models");
db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.");
});

require("./api/routes/product.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
