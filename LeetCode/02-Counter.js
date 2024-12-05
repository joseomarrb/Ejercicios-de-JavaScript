/**
 * Dado un entero n, devuelve una función de contador. 
 * Esta función de contador devuelve inicialmente n y luego devuelve 1 
 * valor más que el valor anterior cada vez que se la llama (n, n + 1, n + 2, etc.).
 */

var createCounter = function(n) {
    
    return function() {
        return n++
    };
};