/**
 * 
 * @param {*} fn 
 * @returns 
 */

/**
 * Dada una función fn, devuelve una nueva función que sea idéntica a la 
 * función original, excepto que garantiza que fn se llame como máximo una vez.
 * 
 * La primera vez que se llama a la función devuelta, debe devolver el mismo resultado que fn.
 * Cada vez que se la llama posteriormente, debe devolver undefined.
 */

var once = function(fn) {
    let calls = 0;
    return function(...args){
        calls++;
        if (calls > 1) {return undefined};
        return fn(...args)
    }
};   


let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)
onceFn(1,2,3); // 6
onceFn(2,3,6); // returns undefined without calling fn



function valores(a, b, c) {
    return a + b + c;
}

console.log(valores(1, 2, 3))



