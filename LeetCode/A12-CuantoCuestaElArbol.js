/**
 * Estás en un mercado muy especial en el que se venden árboles de Navidad 🎄.
 * Cada uno viene decorado con una serie de adornos muy peculiares, y el precio
 * del árbol se determina en función de los adornos que tiene.
 *
 * *: Copo de nieve - Valor: 1
 * o: Bola de Navidad - Valor: 5
 * ^: Arbolito decorativo - Valor: 10
 * #: Guirnalda brillante - Valor: 50
 * @: Estrella polar - Valor: 100
 * Normalmente se sumarían todos los valores de los adornos y ya está…
 *
 * Pero, ¡ojo! Si un adorno se encuentra inmediatamente a la izquierda de otro de
 * mayor valor, en lugar de sumar, se resta su valor.
 */

/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
    // Code here
    let total = 0;
    const prices = { '*': 1, o: 5, '^': 10, '#': 50, '@': 100 };
    for (let i = 0; i < ornaments.length; i++) {
        let currentPrice = prices[ornaments[i]];
        let nextPrice = prices[ornaments[i + 1]];
        if (!prices.hasOwnProperty(ornaments[i])) {
            return undefined
        }
        if (nextPrice && currentPrice < nextPrice) {
            currentPrice = currentPrice * (-1)
        } 
        total = total + currentPrice
    }

    return total;
}   

console.log(calculatePrice('***')); // 3   (1 + 1 + 1)
console.log(calculatePrice('*o')); // 4   (5 - 1)
console.log(calculatePrice('o*')); // 6   (5 + 1)
console.log(calculatePrice('*o*')); // 5  (-1 + 5 + 1)
console.log(calculatePrice('**o*')); // 6  (1 - 1 + 5 + 1)
console.log(calculatePrice('o***')); // 8   (5 + 3)
console.log(calculatePrice('*o@')); // 94  (-5 - 1 + 100)
console.log(calculatePrice('*#')); // 49  (-1 + 50)
console.log(calculatePrice('@@@')); // 300 (100 + 100 + 100)
console.log(calculatePrice('#@')); // 50  (-50 + 100)
console.log(calculatePrice('#@Z')); // undefined (Z es desconocido)
