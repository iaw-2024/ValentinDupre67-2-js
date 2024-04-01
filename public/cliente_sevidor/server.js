window.onload = function() {
    let tablaDeMotos = document.getElementById('tablaDeMotos');
    URL = "https://66040fca2393662c31d081d9.mockapi.io/Motos";
    console.log(URL);
    fetch(URL) 
        console.log(URL)      
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
