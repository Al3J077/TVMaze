// js/navegacion.js

function navigate(vista) {
    switch (vista) {
      case "home":
        renderHome();
        break;
      case "buscar":
        renderBuscar();
        break;
      case "info":
        renderInfo();
        break;
      default:
        document.getElementById("app").innerHTML = "<p>Vista no encontrada</p>";
    }
  }
  