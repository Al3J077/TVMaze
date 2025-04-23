// Obtener favoritos desde localStorage
function obtenerFavoritos() {
  const favoritos = localStorage.getItem("favoritos");
  return favoritos ? JSON.parse(favoritos) : [];
}

// Guardar una serie en favoritos (Create)
function guardarFavorito(serie) {
  const favoritos = obtenerFavoritos();
  const yaExiste = favoritos.some(f => f.id === serie.id);
  if (!yaExiste) {
    favoritos.push(serie);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    mostrarToast("✅ Agregado a favoritos");
  } else {
    mostrarToast("⚠️ Ya está en favoritos");
  }
}

function eliminarFavorito(id) {
  const favoritos = obtenerFavoritos();
  const nuevosFavoritos = favoritos.filter(f => f.id !== id);
  localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
  renderFavoritos();
  mostrarToast("❌ Eliminado de favoritos");
}


function mostrarToast(mensaje) {
  const toast = document.getElementById("toast");
  toast.textContent = mensaje;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}
