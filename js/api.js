async function guardarFavoritoPorId(id) {
  try {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const serie = await response.json();
    guardarFavorito(serie); // función que ya está en favoritos.js
  } catch (error) {
    console.error("Error al guardar favorito:", error);
    alert("No se pudo guardar la serie en favoritos.");
  }
}

async function cargarSeriesDestacadas() {
  const response = await fetch("https://api.tvmaze.com/shows?page=1");
  const series = await response.json();

  const destacadasHTML = series.slice(0, 10).map(serie => `
    <div class="card">
      <h3>${serie.name}</h3>
      <img src="${serie.image?.medium || 'https://via.placeholder.com/210x295?text=No+Image'}" alt="${serie.name}" />
      <button onclick='guardarFavoritoPorId(${serie.id})'>Agregar a favoritos</button>
    </div>
  `).join("");

  document.getElementById("destacadas").innerHTML = destacadasHTML;
}

