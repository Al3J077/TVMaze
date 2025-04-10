async function conexionLista(query) {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const data = await res.json();
    return data; // Retorna toda la respuesta
}

async function general(query) {
    const shows = await conexionLista(query);
    mostrarLista(shows);
}
