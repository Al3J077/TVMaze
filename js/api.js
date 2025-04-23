// js/api.js

async function buscarSeries() {
    const query = document.getElementById("inputBusqueda").value.trim();
    if (!query) return;
  
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
    const data = await response.json();
  
    const html = data.map(item => {
      const show = item.show;
      return `
        <div class="serie">
          <h3>${show.name}</h3>
          <img src="${show.image?.medium || ''}" alt="${show.name}" />
          <button onclick='guardarFavorito(${JSON.stringify(show)})'>❤️</button>
        </div>
      `;
    }).join("");
  
    document.getElementById("resultadosBusqueda").innerHTML = html;
  }
  
  const buscarSerie = async () => {
    const query = document.getElementById("busqueda").value.trim();
  
    if (!query) {
      alert("Por favor escribe el nombre de una serie.");
      return;
    }
  
    const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;
  
    try {
      const res = await fetch(url);
      const data = await res.json();
  
      mostrarResultados(data);
    } catch (error) {
      console.error("Error al buscar la serie:", error);
      document.getElementById("resultados").innerHTML = `<p>Error al buscar la serie.</p>`;
    }
  };

  