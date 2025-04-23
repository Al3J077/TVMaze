// js/navegacion.js
function navigate(view) {
  const main = document.getElementById("app");

  main.classList.remove("mostrar");

  setTimeout(() => {
    switch (view) {
      case "home":
        renderHome();
        break;
      case "buscar":
        renderBuscar();
        break;
      case "favoritos":
        renderFavoritos();
        break;
      case "info":
        renderInfo();
        break;
      default:
        renderHome();
    }

    setTimeout(() => {
      main.classList.add("mostrar");
    }, 10);
  }, 200);
}
