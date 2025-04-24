document.addEventListener("DOMContentLoaded", () => {
  navigate("home");
});

setTimeout(() => {
  const splash = document.getElementById('splash-screen');
  if (splash) splash.style.display = 'none';
}, 4000);


const routes = {
  home: renderHome,
  buscar: renderBuscar,
  info: renderInfo,
  favoritos: renderFavoritos,
  azar: renderAlAzar,
};

