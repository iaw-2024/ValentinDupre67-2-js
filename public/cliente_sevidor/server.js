document.addEventListener('DOMContentLoaded', () => {
    const tablaMotos = document.getElementById('cuerpoDeMotos');
    fetch('http://localhost:3001/datos') 
        .then(response => response.json())
        .then(data => {            
            data.forEach(moto => {
                const fila = document.createElement('tr');
                fila.innerHTML = `
                    <td>${moto.Marca}</td>
                    <td>${moto.Modelo}</td>
                    <td>${moto.Cilindrada}</td>
                    <td>${moto.VelocidadMaxima}</td>
                    <td>${moto.Color}</td>
                    <td>${moto.CapacidadTanque}</td>
                `;
                tablaMotos.appendChild(fila);
            });
        })
        .catch(error => console.error('Error al obtener datos:', error));
});