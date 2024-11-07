/**
 * La página web modelo contiene tres imágenes. Cada imagen está en un 
 * bloque figure con un elemento figcaption para un pie de foto. Al pulsar 
 * sobre cualquier imagen se debe mostar su atributo alt en su pie de foto. 
 * Si el pie ya está relleno se borrará su contenido y no se escribirá nada.
 * 
 * Aclaraciones: Cada imagen es como un botón que alterna el pie de foto entre 
 * vacio (sin texto) y el valor del atributo alt de cada una.
 */
const imagenes = document.querySelectorAll("img");
function ponerPie() {
    imagenes.forEach(img => {
        img.addEventListener("click", () => {
            // Encuentra el <figure> que contiene la imagen
            const figure = img.closest("figure");
    
            // Selecciona el <figcaption> dentro del <figure>
            const figcaption = figure.querySelector("figcaption");
    
            // Alterna el contenido de <figcaption> entre el texto del alt y vacío
            if (figcaption.textContent === "") {
                figcaption.textContent = img.alt;
            } else {
                figcaption.textContent = "";
            }
        });
    });    
}

