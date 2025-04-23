function renderHome() {
  document.getElementById("app").innerHTML = `
    <section class="home">
      <h2>Bienvenido a TV Maze</h2>
      <p>Explora tus series favoritas desde TVMaze.</p>
      <h3>Series recomendadas</h3>
      <div id="recomendadas" class="recomendadas"></div>
    </section>
  `;

  // Cargar series recomendadas automáticamente
  fetch("https://api.tvmaze.com/shows?page=1")
    .then(res => res.json())
    .then(data => {
      const recomendadas = data.slice(0, 10); // Tomamos solo 10 series
      const html = recomendadas.map(serie => `
        <div class="card">
         <h3 onclick="verDetallesSerie(${serie.id})" style="cursor:pointer">${serie.name}</h3>
<img src="${serie.image?.medium || '...'}" alt="${serie.name}" onclick="verDetallesSerie(${serie.id})" style="cursor:pointer" />
          <button onclick="guardarFavoritoPorId(${serie.id})">Agregar a favoritos</button>
        </div>
      `).join("");

      document.getElementById("recomendadas").innerHTML = html;
    })
    .catch(err => {
      console.error("Error al cargar series recomendadas:", err);
      document.getElementById("recomendadas").innerHTML = `<p>No se pudieron cargar las series recomendadas.</p>`;
    });
}




function renderBuscar() {
  document.getElementById("app").innerHTML = `
    <section class="buscar">
      <h2>Buscar series</h2>
      <input type="text" id="input-busqueda" placeholder="Nombre de la serie" />
<button id="btn-buscar-api">Buscar</button>

<label for="filtro-genero">Filtrar por género:</label>
<select id="filtro-genero">
  <option value="">Todos</option>
  <option value="Drama">Drama</option>
  <option value="Comedy">Comedia</option>
  <option value="Action">Acción</option>
  <option value="Horror">Horror</option>
  <option value="Romance">Romance</option>
  <!-- puedes agregar más géneros -->
</select>

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

        const generoSeleccionado = document.getElementById("filtro-genero").value;

const filtrados = data.filter(item => {
  if (!generoSeleccionado) return true;
  return item.show.genres.includes(generoSeleccionado);
});

const resultadosHTML = filtrados.map(item => {
          const serie = item.show;
          return `
            <div class="card">
              <h3 onclick="verDetallesSerie(${serie.id})" style="cursor:pointer">${serie.name}</h3>
              <img src="${serie.image?.medium || 'https://via.placeholder.com/210x295?text=No+Image'}" 
                   alt="${serie.name}" 
                   onclick="verDetallesSerie(${serie.id})" 
                   style="cursor:pointer" />
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

function renderDetalles(serie) {
  document.getElementById("app").innerHTML = `
    <section class="detalle-serie">
      <h2>${serie.name}</h2>
      <img src="${serie.image?.original || 'https://via.placeholder.com/210x295?text=No+Image'}" alt="${serie.name}" />
      <p><strong>Géneros:</strong> ${serie.genres.join(", ")}</p>
      <p><strong>Idioma:</strong> ${serie.language}</p>
      <p><strong>Rating:</strong> ${serie.rating?.average || 'N/A'}</p>
      <p><strong>Resumen:</strong> ${serie.summary || 'No disponible.'}</p>
      <button onclick="guardarFavoritoPorId(${serie.id})">Agregar a favoritos</button>
      <br><br>
      <button onclick="navigate('home')">⬅️ Volver</button>
    </section>
  `;
}


function renderAlAzar() {
  fetch("https://api.tvmaze.com/shows")
    .then(res => res.json())
    .then(shows => {
      const random = Math.floor(Math.random() * shows.length);
      const serie = shows[random];

      renderDetalles(serie);
    })
    .catch(error => {
      console.error("Error al cargar serie aleatoria:", error);
      document.getElementById("app").innerHTML = `
        <p>No se pudo cargar una serie aleatoria. Intenta de nuevo.</p>
      `;
    });
}

