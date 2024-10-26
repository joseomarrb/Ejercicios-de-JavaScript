/**
 * Usar un bucle do..while para crear una cadena que contenga 
 * letras repetidas. Las letras se entran por teclado y solo 
 * podrán ser la X o la Z despues de elegir las letras se le 
 * ingresa el número de repeticiones que deberá estar entre 1 y 15.
 * 
 * Aclaraciones: Si elijo X y luego tecleo 10 se mostrará XXXXXXXXXX. 
 * Si tecleo M me volverá a pedir letra, y si tecleo 20 me volverá a 
 * pedir el número
 */

let letras = prompt("Ingresa una letra y solo podrán ser la X o la Z:");
let repeticiones = parseInt(prompt("Cuantas veces quieres que se repita la letra entre 1 y 15:"));
let output = "";
let contador = 0;

do {
    if ( repeticiones > 15 ) {
        repeticiones = parseInt(prompt("Cuantas veces quieres que se repita la letra entre 1 y 15:"));
    }

    if ( letras === "X" || letras === "Z") {
        for (let letra = 1; letra <= repeticiones; letra++) {
            contador++
            output += letras;
        }
    
        if ( contador === repeticiones ) {
            alert(`${output}, programa finalizado`);
            break;
        }
    } else {
        letras = prompt("Ingresa una letra y solo podrán ser la X o la Z:");
    }

} while ( repeticiones && letras );