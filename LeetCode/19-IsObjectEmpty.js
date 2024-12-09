/**
 * @param {Object|Array} obj
 * @return {boolean}
 */

/**
 * Dado un objeto o una matriz, devuelve si está vacío.
 * 
 * Un objeto vacío no contiene pares clave-valor.
 * Una matriz vacía no contiene elementos.
 * Puedes suponer que el objeto o la matriz es la salida de JSON.parse. 
 * */

var isEmpty = function(obj) {
    if (Object.keys(obj).length === 0) {
        return true;
    } else {
        return false;
    }
};

console.log(isEmpty({"x": 5, "y": 42}));
console.log(isEmpty([null, false, 0]));
console.log(isEmpty({}));
