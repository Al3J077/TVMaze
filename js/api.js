async function guardarFavoritoPorId(id) {
  try {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const serie = await response.json();
    guardarFavorito(serie);
  } catch (error) {
    console.error("Error al guardar favorito:", error);
    alert("No se pudo guardar la serie en favoritos.");
  }
}
