// js/router.js

function navigate(page) {
    switch (page) {
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
  }
  