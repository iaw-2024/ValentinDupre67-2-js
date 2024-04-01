window.onload = function() {
    let tablaDeMotos = document.getElementById('tablaDeMotos');
    URL = "http://localhost:3001/datos.json";
    console.log(URL);
    fetch(URL)        
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
