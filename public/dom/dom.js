window.onload = function() {
  let tablaDeMotos = document.getElementById('tablaDeMotos');

  fetch('http://localhost:3001/datos')
      .then(response => {
          if (!response.ok) {
              throw new Error('Error en la solicitud de datos');
          }
          return response.json();
      })
      .then(datos => {
          for (let moto of datos) {
              let fila = document.createElement('tr');

              for (let propiedad in moto) {
                  let celda = document.createElement('td');
                  celda.textContent = moto[propiedad];
                  fila.appendChild(celda);
              }

              tablaDeMotos.appendChild(fila);
          }
      })
      .catch(error => console.error('Error al obtener datos:', error));
}

