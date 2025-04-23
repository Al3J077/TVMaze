document.addEventListener("DOMContentLoaded", () => {
  navigate("home");

  
  document.addEventListener("click", (e) => {
    if (e.target && e.target.id === "btn-favoritos") {
      renderFavoritos();
    }
  });
});

