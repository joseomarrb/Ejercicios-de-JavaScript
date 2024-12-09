/**
 * 
 * @param {*} digits 
 * @returns 
 */

/**
 * Se le proporciona un entero grande representado como una matriz de enteros digits, 
 * donde cada digits[i] es el i-ésimo dígito del entero. Los dígitos están ordenados 
 * del más significativo al menos significativo de izquierda a derecha. El entero grande 
 * no contiene ningún 0 inicial.
 * 
 * Incremente el entero grande en uno y devuelva la matriz de dígitos resultante. */

var plusOne = function(digits) {
    let acumulador = '';
    digits.forEach( num => acumulador += num );
    let sumAcumulador = BigInt(acumulador) +  BigInt(1);
    let divisionDigits = sumAcumulador.toString().split('');
    let returnedResult = divisionDigits.map( digit => parseInt(digit));
    return returnedResult;
};

console.log(plusOne([1,2,3]));
console.log(plusOne([4,3,2,1]));
console.log(plusOne([9, 9]));
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));
