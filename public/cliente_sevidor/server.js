fetch('http://localhost:3001/datos.json')
  .then(response => response.json())
  .then(data => {
    // Aquí puedes trabajar con los datos obtenidos, por ejemplo:
    console.log(data);
  })
  .catch(error => console.error('Error:', error));
