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
        <h2>Buscar Series</h2>
        <input type="text" id="inputBusqueda" placeholder="Ej: Breaking Bad" />
        <button onclick="buscarSeries()">Buscar</button>
        <div id="resultadosBusqueda"></div>
      </section>
    `;
  }
  
  function renderInfo() {
    document.getElementById("app").innerHTML = `
      <section class="info">
        <h2>Información</h2>
        <p>Esta app fue creada con la API de TVMaze.</p>
      </section>
    `;
  }
  
  function renderFavoritos() {
    const favoritos = obtenerFavoritos();
    if (favoritos.length === 0) {
      document.getElementById("app").innerHTML = `<p>No hay series favoritas aún.</p>`;
      return;
    }
  
    const html = favoritos
      .map(serie => `
        <div class="serie">
          <h3>${serie.name}</h3>
          <img src="${serie.image?.medium || ''}" alt="${serie.name}" />
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
  