fetch('../datos.js')
  .then(response => response.json())
  .then(data => {
    const tabla = document.getElementById('tablaDeMotos');
    data.forEach(moto => {
      const fila = tabla.insertRow();
      Object.values(moto).forEach(valor => {
        const celda = fila.insertCell();
        celda.textContent = valor;
      });
    });
  })
  .catch(error => console.error('Error al obtener los datos:', error));
