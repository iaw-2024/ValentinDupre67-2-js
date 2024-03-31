const express = require("express");
const app = express();

app.get("/express", (req, res) => {
    res.sendFile("../public/express/lista.html", { root: '.' });
});
app.get("/cliente_servidor", (req, res) => res.send("Cliente Servidor on Vercel!"));
app.use(express.static('public'))

app.use(express.static('public'))

app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;