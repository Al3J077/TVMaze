// js/favoritos.js

function obtenerFavoritos() {
  return JSON.parse(localStorage.getItem("favoritos")) || [];
}

function guardarFavorito(serie) {
  const favoritos = obtenerFavoritos();
  if (favoritos.some(s => s.id === serie.id)) return;

  favoritos.push(serie);
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

function eliminarFavorito(id) {
  let favoritos = obtenerFavoritos();
  favoritos = favoritos.filter(serie => serie.id !== id);
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
  renderFavoritos(); // Vuelve a renderizar después de eliminar
}
