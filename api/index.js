const express = require("express");
const path = require("path");
const app = express();

app.use(express.static('public'));

app.get("/express", (req, res) => {    
    res.sendFile(path.join(__dirname, "public", "express", "lista.html"));
});

app.get("/cliente_servidor", (req, res) => res.send("Cliente Servidor on Vercel!"));
app.use(express.static('public'))


app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;