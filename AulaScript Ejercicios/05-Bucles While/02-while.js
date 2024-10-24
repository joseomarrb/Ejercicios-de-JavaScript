/**
 * Se trata de pedir al usuario que teclee un número entre 
 * 1 y 5, si escribe alguno que esté fuera de ese rango deberá 
 * volver a pedir el número.
 * 
 * Aclaraciones: Si tecleo 0 me dirá Por favor teclee un número entre 1 y 5.
 */

const numUser = parseInt(prompt("Ingrese un número entre 1 y 5:"));

while (numUser) {
    if (numUser > 0 && numUser <= 5 ) {
        alert(`El número tecleado fue el ${numUser}`);
        break;
    }

    alert("Por favor teclee un número entre 1 y 5");
    break;
}