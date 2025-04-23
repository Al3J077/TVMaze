document.addEventListener("DOMContentLoaded", () => {
  navigate("home");
});

const routes = {
  home: renderHome,
  buscar: renderBuscar,
  info: renderInfo,
  favoritos: renderFavoritos,
  azar: renderAlAzar, // NUEVA FUNCIÓN
};

