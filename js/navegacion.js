function navigate(route) {
  const main = document.getElementById("app");

  main.classList.remove("mostrar");

  setTimeout(() => {
    if (routes[route]) {
      routes[route](); // Ejecuta la vista correspondiente
    } else {
      console.warn("Ruta no encontrada:", route);
      renderHome(); // O puedes mostrar un error
    }

    setTimeout(() => {
      main.classList.add("mostrar");
    }, 10);
  }, 200);
}
