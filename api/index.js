const express = require("express");
const app = express();
const path = require('path');
const expressApp = require("../public/express/express.js" );

app.use(expressApp);

app.use(express.static('public'));

app.get("/express", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/express/lista.html'));
});

app.get("/cliente_servidor", (req, res) => res.sendFile(path.join(__dirname, '../public/express/lista.html')))

/* TODO preguntar si es necesartio 
app.get("/datos", (req, res) => res.json(datos));
*/

app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;