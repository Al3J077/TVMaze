// js/home.js

function renderHome() {
    const app = document.getElementById("app");
    app.innerHTML = "<h2>Series destacadas</h2><div id='series-container'></div>";
  
    fetch("https://api.tvmaze.com/shows")
      .then(res => res.json())
      .then(data => {
        const seriesContainer = document.getElementById("series-container");
        data.slice(0, 20).forEach(serie => {
          const card = document.createElement("div");
          card.innerHTML = `
            <div class="card">
              <img src="${serie.image?.medium || ''}" alt="${serie.name}">
              <h3>${serie.name}</h3>
              <button onclick='guardarFavoritoPorId(${serie.id})'>Agregar a favoritos</button>
            </div>
          `;
          seriesContainer.appendChild(card);
        });
      });
  }
  