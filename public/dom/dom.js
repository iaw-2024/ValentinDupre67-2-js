window.onload = function() {
  let tablaDeMotos = document.getElementById('tablaDom');
  fetch('../datos.json')
    .then(response => response.json())
    .then(data => {
      for (let moto of data) {
        let fila = document.createElement('tr'); 

        for (let propiedad in moto) {
          let celda = document.createElement('td');
          celda.textContent = moto[propiedad];
          fila.appendChild(celda);
        }

        tablaDeMotos.appendChild(fila);
      }
    })
    .catch(error => console.error('Error al obtener los datos:', error));
};

