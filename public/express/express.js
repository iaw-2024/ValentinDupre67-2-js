
const express = require("express");
const app = express();
const fs = require("fs");

const datos = require('../datos.js');

function generarTabla(datos) {
    let tablaHTML = '<table id="ReemplazarPorTabla">';
    tablaHTML += '<tr><th>Marca</th><th>Modelo</th><th>Cilindrada</th><th>Velocidad Maxima(Km/h)</th><th>Color</th><th>Capacidad del Tanque(Lts)</th></tr>';
    datos.forEach(moto => {
        tablaHTML += `<tr><td>${moto.marca}</td><td>${moto.modelo}</td><td>${moto.cilindrada}</td><td>${moto.velocidadMaxima}</td><td>${moto.color}</td><td>${moto.capacidadTanque}</td></tr>`;
    });
    tablaHTML += '</table>';
    return tablaHTML;
}

app.get("/express", (req, res) => {
    const tableHTML = generarTabla(datos);    
    fs.readFile("public/express/index.html", "utf8", (err, html) => {
        if (err) {
            console.error("Error al leer el archivo index.html:", err);
            res.status(500).send("Error interno del servidor");
            return;
        }

        const modifiedHTML = html.replace('<table id="tablaDeMotos">', tableHTML);
        
        res.send(modifiedHTML);
    });
});

module.exports = app;
