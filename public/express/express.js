const express = require("express");
const app = express();
const path = require('path');
const datos = require('./datos.js');


app.get("/tablaDeMotos", (req, res) => {
    
    const crearTabla = (datos) => {
        let tablaHTML = '<table>';
        tablaHTML += '<tr><th>Marca</th><th>Modelo</th><th>Cilindrada</th><th>Velocidad Máxima(Km/h)</th><th>Color</th><th>Capacidad del Tanque(Lts)</th></tr>';
        
        datos.forEach(moto => {
            tablaHTML += `<tr><td>${moto.marca}</td><td>${moto.modelo}</td><td>${moto.cilindrada}</td><td>${moto.velocidadMaxima}</td><td>${moto.color}</td><td>${moto.capacidadTanque}</td></tr>`;
        });

        tablaHTML += '</table>';
        return tablaHTML;
    };

    
    const tablaGenerada = crearTabla(datos);

   
    res.send(tablaGenerada);
});


app.use(express.static('public'));


app.listen(3001, () => console.log("Servidor listo en el puerto 3001."));

module.exports = app;


