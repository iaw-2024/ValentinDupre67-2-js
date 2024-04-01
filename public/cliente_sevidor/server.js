document.addEventListener('DOMContentLoaded', () => {
    const tablaMotos = document.getElementById('cuerpoDeMotos');

    fetch('Access-Control-Allow-Origin:http://localhost:3001/datos.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud de datos');
            }
            return response.json();
        })
        .then(datos => {
            console.log('Datos:', datos);
            for (let moto of datos) {
                const fila = document.createElement('tr');
                fila.innerHTML = `
                    <td>${moto.marca}</td>
                    <td>${moto.modelo}</td>
                    <td>${moto.cilindrada}</td>
                    <td>${moto.velocidadMaxima}</td>
                    <td>${moto.color}</td>
                    <td>${moto.capacidadTanque}</td>
                `;
                tablaMotos.appendChild(fila);
            }
        })
        .catch(error => console.error('Error al obtener datos:', error));
});
