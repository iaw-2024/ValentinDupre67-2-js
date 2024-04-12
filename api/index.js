const express = require("express");
const app = express();
const path = require('path');
const fs = require("fs");

const dataPath = path.join(__dirname, "datos.json");
const datos = JSON.parse(fs.readFileSync(dataPath, "utf8"));

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '../view'));

app.get("/express", (req, res) => {res.render("view", { datos: datos });}); 

app.get("/cliente_servidor", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/cliente_sevidor/index.html'));
});

app.get("/datos", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/dom/datos.json'));
});

app.use(express.static('public'));

app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;