// js/views.js

function renderHome() {
  document.getElementById("app").innerHTML = `
    <section class="home">
      <h2>Bienvenido a TV Maze</h2>
      <p>Explora tus series favoritas desde TVMaze.</p>
    </section>
  `;
}

function renderBuscar() {
  document.getElementById("app").innerHTML = `
    <section class="buscar">
      <h2>Buscar series</h2>
      <input type="text" id="input-busqueda" placeholder="Nombre de la serie" />
      <button id="btn-buscar-api">Buscar</button>
      <div id="resultados-busqueda"></div>
    </section>
  `;

  // Espera un momento para asegurar que el botón esté en el DOM
  setTimeout(() => {
    document.getElementById("btn-buscar-api").addEventListener("click", async () => {
      const query = document.getElementById("input-busqueda").value.trim();
      if (!query) return alert("Escribe algo para buscar");

      try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        const data = await response.json();

        const resultadosHTML = data.map(item => {
          const serie = item.show;
          return `
            <div class="card">
              <h3>${serie.name}</h3>
              <img src="${serie.image?.medium || 'https://via.placeholder.com/210x295?text=No+Image'}" alt="${serie.name}" />
              <button onclick='guardarFavoritoPorId(${serie.id})'>Agregar a favoritos</button>
            </div>
          `;
        }).join("");

        document.getElementById("resultados-busqueda").innerHTML = resultadosHTML;

      } catch (error) {
        console.error("Error al buscar:", error);
        alert("Ocurrió un error al buscar. Intenta de nuevo.");
      }
    });
  }, 0);
}


function renderInfo() {
  document.getElementById("app").innerHTML = `
    <section class="info">
      <h2>Información</h2>
      <p>Esta app fue creada con la API oficial de <a href="https://www.tvmaze.com/api" target="_blank">TVMaze</a>.</p>
    </section>
  `;
}

function renderFavoritos() {
  const favoritos = obtenerFavoritos();
  if (favoritos.length === 0) {
    document.getElementById("app").innerHTML = `<p>No hay series favoritas aún.</p>`;
    return;
  }

  const html = favoritos.map(serie => `
    <div class="serie">
      <h3>${serie.name}</h3>
      <img src="${serie.image?.medium || 'https://via.placeholder.com/210x295?text=No+Image'}" alt="${serie.name}" />
      <button onclick="eliminarFavorito(${serie.id})">Eliminar</button>
    </div>
  `).join("");

  document.getElementById("app").innerHTML = `
    <section class="favoritos">
      <h2>Mis Favoritos</h2>
      ${html}
    </section>
  `;
}
