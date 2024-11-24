/**
 * Crea una función javascript que reciba como argumento una frase y que 
 * devuelva el número de espacios, dígitos y letras  contenidos en la frase. 
 * Puedes usar expresiones regulares
 * 
 * Aclaraciones: Si llamo al a funcion contarCars("Si, hoy es dia 10") debería devolver
 * 2 digitos, 4 espacios y 10 letras
 */

let espacios = 0, digitos = 0, letras = 0;
function contarCars(frase) {
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === ' ') {
            espacios += 1;
        } else if (Number.isInteger(parseInt(frase[i]))) {
            digitos += 1;
        } else if (!Number.isInteger(parseInt(frase[i]))) {
            letras += 1;
        };
    }
    return `digitos ${digitos}, espacios ${espacios}, letras ${letras}`;
};

console.log(contarCars("Si hoy es dia 10"));