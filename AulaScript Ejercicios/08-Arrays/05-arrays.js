/**
 * Escribe una función que pueda devolver el valor más pequeño de un array numérico 
 * o el índice de ese valor. El segundo parámetro de la función dirá si debe devolver 
 * el valor ("v") o el índice ("i"). No uses métodos del objeto array.
 * 
 * Se supone que el primer parámetro siempre será una matriz llena con al menos 1 
 * número y sin duplicados.
 * 
 * Se suponer el segundo parámetro será una letra con uno de dos valores: 'v' 'i'
 * 
 * Aclaraciones: min([4,5,7], 'v')  devolverá 4, mientras que min([4,5,7], 'i') devolverá 0.
 */ 

function min(array, valor) {
    let minimo = array[0];
    let indice = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] <= minimo) {
            minimo = array[i];
            indice = i;
        }
    }

    switch (valor) {
        case "v":
            return minimo;
        case "i":
            return indice;
        default:
            return "Valor no encontrado";
    }
}

console.log(min([4,5,7, 2], 'i'));