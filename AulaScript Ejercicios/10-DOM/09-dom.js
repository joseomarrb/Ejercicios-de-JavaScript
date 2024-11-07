/**
 * En la página modelo tienes un elemento div con un imagen en su interior. 
 * Cada vez que hagas click con el ratón sobre el la imagen cambiará.
 * 
 * El bloque tiene como clase carrousel. Dispones de tres imágenes: uno.png, 
 * dos.png y tres.png. Se deberán ir sucediendo en forma circular, despues de 
 * la última vuelve a la primera
 * 
 * El bloque posee un atributo data-set que almacena el nombre de la imagen 
 * visible en cada momento.
 */
const carrousel = document.querySelector(".carrusel");
const imagen = carrousel.querySelector("img");

// Lista de las imágenes
const imagenes = ["imgs/uno.png", "imgs/dos.png", "imgs/tres.png"];

// Evento de clic para cambiar la imagen
    carrousel.addEventListener("click", () => {
// Obtener el nombre de la imagen actual desde el atributo data-set
let imagenActual = carrousel.getAttribute("data-set");

// Encontrar el índice de la imagen actual en el array de imágenes
let indiceActual = imagenes.indexOf(imagenActual);

// Calcular el índice de la siguiente imagen, reiniciando si es el último
let siguienteIndice = (indiceActual + 1) % imagenes.length;

// Cambiar el atributo src de la imagen
imagen.src = imagenes[siguienteIndice];

// Actualizar el atributo data-set con el nombre de la imagen visible
carrousel.setAttribute("data-set", imagenes[siguienteIndice]);
});
