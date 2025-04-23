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
  try {
    const response = await fetch("https://api.tvmaze.com/shows?page=1"); // Página con muchas series
    const data = await response.json();

    // Tomamos las primeras 10 series para mostrar
    const destacadas = data.slice(0, 10);

    const html = destacadas.map(serie => `
      <div class="card">
        <h4>${serie.name}</h4>
        <img src="${serie.image?.medium || 'https://via.placeholder.com/210x295?text=No+Image'}" alt="${serie.name}" />
        <button onclick="guardarFavoritoPorId(${serie.id})">Agregar a favoritos</button>
      </div>
    `).join("");

    document.getElementById("destacadas").innerHTML = html;
  } catch (error) {
    console.error("Error al cargar series destacadas:", error);
    document.getElementById("destacadas").innerHTML = "<p>No se pudieron cargar las series destacadas.</p>";
  }
}


