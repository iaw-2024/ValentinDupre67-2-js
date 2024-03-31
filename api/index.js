const express = require("express");
const app = express();
const path = require('path');



app.get("/express", (req, res) => {
    res.sendFile('../public/express/lista.html', {root: '.'});
});

app.get("/cliente_servidor", (req, res) => res.send("Cliente Servidor on Vercel!"));

app.get("/datos", (req, res) => res.json(datos));


app.use(express.static('public'))

app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;