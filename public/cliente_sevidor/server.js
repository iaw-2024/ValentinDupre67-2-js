window.onload = function() {
    const tablaDeMotos = document.getElementById('cuerpoDeMotos');
    console.log(fetch('http://localhost:3001/datos'));
    fetch('http://localhost:3001/datos')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud de datos');
            }
            return response.json();
        })
        .then(datos => {
            for (let moto of datos) {
                const fila = document.createElement('tr');
                fila.innerHTML = `
                    <td>${moto.Marca}</td>
                    <td>${moto.Modelo}</td>
                    <td>${moto.Cilindrada}</td>
                    <td>${moto.VelocidadMaxima}</td>
                    <td>${moto.Color}</td>
                    <td>${moto.CapacidadTanque}</td>
                `;
                tablaDeMotos.appendChild(fila);
            }
        })
        .catch(error => console.error('Error al obtener datos:', error));
};
