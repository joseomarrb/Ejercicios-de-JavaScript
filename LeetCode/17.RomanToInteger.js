/**
 * 
 * @param {*} s 
 */

/**
 * Los números romanos se representan con siete símbolos diferentes: I, V, X, L, C, D y M.
 * 
 * Símbolo Valor
 * I 1
 * V 5
 * X 10
 * L 50
 * C 100
 * D 500
 * M 1000
 * 
 * Por ejemplo, 2 se escribe como II en números romanos, solo dos unos sumados. 
 * 12 se escribe como XII, que es simplemente X + II. El número 27 se escribe como XXVII, que es XX + V + II.
 * 
 * Los números romanos suelen escribirse de mayor a menor de izquierda a derecha. 
 * Sin embargo, el número para cuatro no es IIII. En cambio, el número cuatro se escribe como IV. 
 * Debido a que el uno está antes del cinco, lo restamos y obtenemos cuatro. El mismo principio se 
 * aplica al número nueve, que se escribe como IX. Hay seis casos en los que se utiliza la resta:
 * 
 * I se puede colocar antes de V (5) y X (10) para formar 4 y 9.
 * X se puede colocar antes de L (50) y C (100) para formar 40 y 90.
 * C se puede colocar antes de D (500) y M (1000) para formar 400 y 900.
 * Dado un número romano, conviértalo en un entero.
 */

var romanToInt = function(s) {
    let outputReturned = 0;
    let romanNumber = s.split('');
    for (let i = 0; i < romanNumber.length; i++) {
        let pares = romanNumber[i] + romanNumber[i + 1]
        switch (romanNumber[i]) {
            case 'I':
                outputReturned += 1;
                break;
            case 'IV':
                outputReturned += 4;
                break;
            case 'V':
                outputReturned += 5;
                break;
            case 'IX':
                outputReturned += 9;
                break;
            case 'X':
                outputReturned += 10;
                break;
            case 'XL':
                outputReturned += 40;
                break;
            case 'L':
                outputReturned += 50;
                break;
            case 'XL':
                outputReturned += 40;
                break;
            case 'C':
                outputReturned += 100;
                break;
            case 'D':
                outputReturned += 500;
                break;
            case 'M':
                outputReturned += 1000;
                break;
        }
    }
    return outputReturned;
};

console.log(romanToInt("III"));
console.log(romanToInt('LVIII'));
console.log(romanToInt("MCMXCIV"));