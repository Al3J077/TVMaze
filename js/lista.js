function mostrarLista(shows) {
    const app = document.getElementById("app");
    app.innerHTML = "Lista de Series";   
    console.log(shows);

    let seriesHTML = "";
    for (let i = 0; i < shows.length; i++) {
        const show = shows[i].show; // Acceder al objeto de la serie
        const id = show.id; // ID de la serie
        seriesHTML += `
        <div class="c-lista-serie show-${id}" onclick="mostrarDetalle('${show.name}')">
            <p>${show.name}</p>
            <img src="${show.image ? show.image.medium : ''}" width="auto" height="60" loading="lazy" alt="${show.name}">
            <p>${show.summary ? show.summary.replace(/<[^>]+>/g, '') : 'Sin descripción'}</p>
        </div>`;
    }
    app.innerHTML = seriesHTML;
}
