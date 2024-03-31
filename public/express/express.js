
const express = require("express");
const app = express();
const fs = require("fs");

const datos = [
    { marca: 'Yamaha', modelo: 'YZF-R1', cilindrada: 998, velocidadMaxima: 285, color: 'Azul', capacidadTanque: 17 },
    { marca: 'Honda', modelo: 'CBR1000RR', cilindrada: 1000, velocidadMaxima: 299, color: 'Rojo', capacidadTanque: 16 },
    { marca: 'Honda', modelo: 'CBR600RR', cilindrada: 600, velocidadMaxima: 252, color: 'Blanco', capacidadTanque: 18 },
    { marca: 'Honda', modelo: 'CBR500R', cilindrada: 500, velocidadMaxima: 185, color: 'Negro', capacidadTanque: 17.1 },
    { marca: 'Honda', modelo: 'CBR300R', cilindrada: 300, velocidadMaxima: 157, color: 'Azul', capacidadTanque: 13 },
    { marca: 'Honda', modelo: 'CBR125R', cilindrada: 125, velocidadMaxima: 120, color: 'Rojo', capacidadTanque: 13 },
    { marca: 'Ducati', modelo: 'Panigale V4', cilindrada: 1103, velocidadMaxima: 290, color: 'Rojo', capacidadTanque: 16 },
    { marca: 'BMW', modelo: 'S1000RR', cilindrada: 999, velocidadMaxima: 299, color: 'Blanco', capacidadTanque: 17.5 },
    { marca: 'Kawasaki', modelo: 'Ninja ZX-10R', cilindrada: 998, velocidadMaxima: 299, color: 'Verde', capacidadTanque: 17 },
    { marca: 'Suzuki', modelo: 'GSX-R1000', cilindrada: 999, velocidadMaxima: 299, color: 'Azul', capacidadTanque: 16 },
    { marca: 'Aprilia', modelo: 'RSV4 1100', cilindrada: 1078, velocidadMaxima: 290, color: 'Negro', capacidadTanque: 18.5 },
    { marca: 'KTM', modelo: 'RC16', cilindrada: 1000, velocidadMaxima: 310, color: 'Naranja', capacidadTanque: 20 },
    { marca: 'Triumph', modelo: 'Daytona 675', cilindrada: 675, velocidadMaxima: 260, color: 'Negro', capacidadTanque: 17.4 },
    { marca: 'Yamaha', modelo: 'YZF-R6', cilindrada: 599, velocidadMaxima: 257, color: 'Blanco', capacidadTanque: 17 },
    { marca: 'Yamaha', modelo: 'YZF-R3', cilindrada: 321, velocidadMaxima: 188, color: 'Negro', capacidadTanque: 14 },
    { marca: 'Yamaha', modelo: 'YZF-R125', cilindrada: 125, velocidadMaxima: 120, color: 'Rojo', capacidadTanque: 11.5 },
    { marca: 'Yamaha', modelo: 'MT-10', cilindrada: 998, velocidadMaxima: 250, color: 'Gris', capacidadTanque: 17 },
    { marca: 'Harley Davidson', modelo: 'Street 750', cilindrada: 749, velocidadMaxima: 180, color: 'Negro', capacidadTanque: 13.1 },
    { marca: 'Indian', modelo: 'Scout Bobber', cilindrada: 1133, velocidadMaxima: 180, color: 'Rojo', capacidadTanque: 12.5 },
    { marca: 'Royal Enfield', modelo: 'Interceptor 650', cilindrada: 648, velocidadMaxima: 170, color: 'Plata', capacidadTanque: 13.7 }
  ];

function generarTabla(datos) {
    let tablaHTML = '<table id="tablaDeMotos">';
    tablaHTML += '<tr><th>Marca</th><th>Modelo</th><th>Cilindrada</th><th>Velocidad Maxima(Km/h)</th><th>Color</th><th>Capacidad del Tanque(Lts)</th></tr>';
    datos.forEach(moto => {
        tablaHTML += `<tr><td>${moto.marca}</td><td>${moto.modelo}</td><td>${moto.cilindrada}</td><td>${moto.velocidadMaxima}</td><td>${moto.color}</td><td>${moto.capacidadTanque}</td></tr>`;
    });
    tablaHTML += '</table>';
    return tablaHTML;
}

app.get("/express", (req, res) => {
    const tableHTML = generarTabla(datos);    
    fs.readFile("public/express/lista.html", "utf8", (err, html) => {
        if (err) {
            console.error("Error al leer el archivo index.html:", err);
            res.status(500).send("Error interno del servidor");
            return;
        }
        const modifiedHTML = html.replace('<!--tablaDeMotos-->', tableHTML);        
        res.send(modifiedHTML);
    });
});

module.exports = app;
