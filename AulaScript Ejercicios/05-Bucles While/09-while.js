/**
 * Este script muestra un menu de opciones: 1- Leer datos. 2- Mostrar datos 
 * 3- Fin. El usuario deberá teclear uno de ellos y el programa mostrará la 
 * opción elegida. Si teclea un valor fuera del menu se mostrará un mensaje 
 * de error y se vuelve a pedir un número de opción. El programa finaliza al 
 * teclear el 3.
 * 
 * Aclaraciones: Pulso 1, mensaje Opción leeer datos. Y vuelve a pader opción. 
 * Pulso 4 : Error y vuelve a pedir opción, Pulso 3: Fin del programa y acaba.
 */

let opciones = parseInt(prompt("Insertar el número de la opción que elijas: \n1- Leer Datos \n2- Mostrar Datos \n3- Fin."));

while ( opciones ) {
    if (opciones === 1) {
        alert(`Pulsó ${opciones}, Leer Datos`);
        opciones = parseInt(prompt("Insertar el número de la opción que elijas: \n1- Leer Datos \n2- Mostrar Datos \n3- Fin."));
    } else if ( opciones === 2 ) {
        alert(`Pulsó ${opciones}, Mostrar Datos`);
        opciones = parseInt(prompt("Insertar el número de la opción que elijas: \n1- Leer Datos \n2- Mostrar Datos \n3- Fin."));
    } else if ( opciones === 3 ) {
        alert(`Pulsó ${opciones}, Fin`);
        break;
    } else {
        opciones = parseInt(prompt(`ERROR!!!, Pulsó ${opciones} opción no valida. \n1- Leer Datos \n2- Mostrar Datos \n3- Fin.`));
    }
}