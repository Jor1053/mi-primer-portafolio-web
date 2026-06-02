const listaImagenes = [
    "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=400&q=80",
    "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=400&q=80",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80",
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80"
];

function transformarAHtml(urlImagen) {

    return `<img src="${urlImagen}" alt="Imagen del portafolio" class="foto-automatica">`;
}


const contenedorGaleria = document.getElementById("galeria-renderizada");
let codigoHtmlFinal = "";

for (const imagenUrl of listaImagenes) {

    codigoHtmlFinal += transformarAHtml(imagenUrl);
}

contenedorGaleria.innerHTML = codigoHtmlFinal;

console.log("¡Galería dinámicamente inyectada con éxito! Total de ítems procesados:", listaImagenes.length);