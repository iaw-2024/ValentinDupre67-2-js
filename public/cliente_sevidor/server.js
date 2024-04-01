fetch('https://66040fca2393662c31d081d9.mockapi.io/Motos')
  .then(response => response.json())
  .then(data => {
    // Aquí puedes trabajar con los datos obtenidos, por ejemplo:
    console.log(data);
  })
  .catch(error => console.error('Error:', error));
