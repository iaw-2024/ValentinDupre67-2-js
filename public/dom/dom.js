const motos = require('../datos.js');

window.onload = function() {
  const tablaDeMotos = document.getElementById('tablaDeMotos');

  for (let moto of motos) {
    let fila = document.createElement('tr');

    for (let propiedad in moto) {
      let celda = document.createElement('td');
      celda.textContent = moto[propiedad];
      fila.appendChild(celda);
    }

    tablaDeMotos.appendChild(fila);
  }
};
