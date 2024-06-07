document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtiene los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const pais = document.getElementById('pais').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;

    // Validación básica
    if (nombre === '' || correo === '' || pais === '' || telefono === '' || mensaje === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Aquí puedes añadir más validaciones si es necesario

    // Si todas las validaciones pasan, muestra un mensaje de éxito
    alert('Mensaje enviado con éxito.');
    
    // Restablece el formulario después del envío
    document.getElementById('contactForm').reset();
});
