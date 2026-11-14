document.addEventListener('DOMContentLoaded', () => {
    const nombreInput = document.getElementById('nombre');
    const ciudadInput = document.getElementById('ciudad');
    const boton = document.getElementById('btn-guardar');

    if (!nombreInput || !ciudadInput || !boton) return;

    boton.addEventListener('click', () => {
        const nombre = nombreInput.value.trim();
        const ciudad = ciudadInput.value.trim();

        if (!nombre || !ciudad) {
            alert('Por favor, escribe tu nombre y tu ciudad..');
            return;
        }

        const usuario = { nombre, ciudad };
        localStorage.setItem('usuario', JSON.stringify(usuario));
        window.location.href = 'pagina2.html';
    });
});
