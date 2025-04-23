function navigate(view) {
  const main = document.getElementById("app");
  main.classList.remove("mostrar"); // Oculta antes de cambiar

  setTimeout(() => {
    if (view === "home") renderHome();
    else if (view === "buscar") renderBuscar();
    else if (view === "favoritos") renderFavoritos();
    else if (view === "info") renderInfo();

    setTimeout(() => {
      main.classList.add("mostrar"); // Muestra con animación
    }, 10);
  }, 200);
}
