window.onload = function() {
  let tablaDeMotos = document.getElementById('tablaDeMotos');

  for (let moto of datos) {
    let fila = document.createElement('tr'); 

    for (let propiedad in moto) {
      let celda = document.createElement('td');
      celda.textContent = moto[propiedad];
      fila.appendChild(celda);
    }

    tablaDeMotos.appendChild(fila);
  }
};
