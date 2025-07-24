// Cargar favoritos del localStorage
function obtenerFavoritos() {
  return JSON.parse(localStorage.getItem('favoritos')) || [];
}

function guardarFavoritos(favoritos) {
  localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

function actualizarCorazones() {
  const favoritos = obtenerFavoritos();
  document.querySelectorAll('.heart-icon').forEach(icon => {
    const src = icon.getAttribute('data-src');
    if (favoritos.includes(src)) {
      icon.classList.add('active');
      icon.textContent = '❤️';
    } else {
      icon.classList.remove('active');
      icon.textContent = '🤍';
    }
  });
}

document.querySelectorAll('.heart-icon').forEach(icon => {
  icon.addEventListener('click', () => {
    const src = icon.getAttribute('data-src');
    let favoritos = obtenerFavoritos();

    if (favoritos.includes(src)) {
      // quitar de favoritos
      favoritos = favoritos.filter(item => item !== src);
    } else {
      // añadir a favoritos
      favoritos.push(src);
    }

    guardarFavoritos(favoritos);
    actualizarCorazones();
  });
});

// Ejecutar al cargar
window.addEventListener('load', actualizarCorazones);
