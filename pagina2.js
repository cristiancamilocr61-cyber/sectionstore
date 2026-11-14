document.addEventListener('DOMContentLoaded', () => {
    const saludo = document.getElementById('saludo');
    const botonBorrar = document.getElementById('btn-borrar');

    if (!saludo) return;

    const usuarioGuardado = localStorage.getItem('usuario');

    if (usuarioGuardado) {
        const usuario = JSON.parse(usuarioGuardado);
        saludo.textContent = `Hola ${usuario.nombre}, bienvenido/a a ${usuario.ciudad}.`;
    } else {
        saludo.textContent = 'No hay datos guardados todavía.';
    }

    if (botonBorrar) {
        botonBorrar.addEventListener('click', () => {
            localStorage.removeItem('usuario');
            window.location.href = 'pagina1.html';
        });
    }
});
