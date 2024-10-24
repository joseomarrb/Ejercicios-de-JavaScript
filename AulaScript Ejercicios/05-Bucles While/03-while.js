/**
 * Un script que preguntará al usuario si desea continuar con 
 * el programa. Si el usuario pulsa una letra n (mayúscla o minúscula), 
 * el programa finalizará. Cualquier otra entrada repetirá la pregunta.
 * 
 * Aclaraciones: El usuario teclea Si, como no es la letra s pues dirá Error, 
 * ¿Desa seguir con el programa?
 */

let programa = prompt("Desea iniciar el programa? \nPara salir del programa pulse: n o N");

while ( programa ) {
    if (programa === "n" || programa === "N") {
        alert("Ha finalizado el programa");
        break;
    } else {
        programa = prompt("Error, ¿Desa seguir con el programa? \nPara salir del programa pulse: n o N");
    }
}