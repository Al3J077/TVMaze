// js/favoritos.js

function guardarFavorito(serie) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    if (!favoritos.find(s => s.id === serie.id)) {
      favoritos.push(serie);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      alert("¡Serie agregada a favoritos!");
    }
  }
  
  function obtenerFavoritos() {
    return JSON.parse(localStorage.getItem("favoritos")) || [];
  }
  
  function eliminarFavorito(id) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    favoritos = favoritos.filter(s => s.id !== id);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    renderFavoritos(); // Vuelve a renderizar
  }
  
  function renderFavoritos() {
    const app = document.getElementById("app");
  
    const favoritos = obtenerFavoritos();
  
    if (favoritos.length === 0) {
      app.innerHTML = `
        <section>
          <h2>Mis Favoritos ❤️</h2>
          <p>No tienes favoritos aún.</p>
        </section>
      `;
      return;
    }
  
    let html = `
      <section>
        <h2>Mis Favoritos ❤️</h2>
        <div class="lista-favoritos">
    `;
  
    favoritos.forEach(serie => {
      html += `
        <div class="card">
          <h3>${serie.name}</h3>
          <img src="${serie.image?.medium || 'https://via.placeholder.com/210x295?text=No+Image'}" alt="${serie.name}" />
          <button onclick="eliminarFavorito(${serie.id})">Eliminar ❌</button>
        </div>
      `;
    });
  
    html += "</div></section>";
    app.innerHTML = html;
  }
  