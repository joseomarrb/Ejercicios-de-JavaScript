/**
 * En una sala de juegos existen tre salas: Consolas, Juegos 2D, Juegos 3D, 
 * Realidad Virtual. Si un usuario paga  4 créditos puede acceder a todas, 
 * si paga 3 solo podrá acceder a las tres primeras, si paga 2 a las dos 
 * primeras y si paga 1 solo a la primera sala.
 * 
 * Aclaraciones: Tecleo que pago 2 créditos, el escript me dirá que puedo 
 * acceder a las salas de consola y juegos 2D.
 */

const numCreditos = parseInt(prompt("Inserta el numero de creditos que vas a pagar:"));

switch (numCreditos) {
    case 4:
        alert("Puedes acceder a: Consolas, Juegos 2D, Juegos 3D, Realidad Virtual");
        break;
    case 3:
        alert("Puedes acceder a: Consolas, Juegos 2D, Juegos 3D");
        break;
    case 2:
        alert("Puedes acceder a: Consolas, Juegos 2D");
        break;
    case 1:
        alert("Puedes acceder a: Consolas");
        break;
    default:
        alert("Solo puedes obtener 4 creditos, inserta un numero del 1 al 4.");
        break;
}

