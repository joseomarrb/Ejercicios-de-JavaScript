/**
 * Crea una función que reciba como argumento una cadena de caracteres 4
 * y devuelva una cadena con todas las vocales y el número de veces que 
 * aparece cada una en la cadena argumento. 
 * Procura usar prioritariamente los métodos del objeto string 
 * 
 * Aclaraciones: Ejemplo cuentaVocales("Hola soy Pepe") deberá imprimir a:1, e:2, i:0, o:2, u:0
 * 
 * */
let a = 0, e = 0, i = 0, o = 0, u = 0;
function cuentaVocales(string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'a' || string[i] === 'A') {
            a += 1;
        } else if (string[i] === 'e' || string[i] === 'E') {
            e += 1;
        } else if (string[i] === 'i' || string[i] === 'I') {
            i += 1;
        } else if (string[i] === 'o' || string[i] === 'O') {
            o += 1;
        } else if (string[i] === 'u' || string[i] === 'U') {
            u += 1;
        };
    };
    return `a:${a}, e:${e}, i:${i} o:${o} u:${u}`;
}

console.log(cuentaVocales("HOLA SOY PEPE"));