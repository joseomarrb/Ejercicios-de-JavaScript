/**Traducir números a palabras
 * 
Escribir una función llamada numerosAPalabras que reciba un arreglo
de números (cada número en el rango de 0 a 0) y retorne un nuevo
arreglo convirtiendo cada número a su versión en palabras. */


function numerosAPalabras(array) {
    const palabras = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nuevo", "diez"];
    const nuevoArr = array.map( num => {
        return palabras[num]
    } )
    return nuevoArr
}

console.log(numerosAPalabras([0, 1, 2, 3, 4])) // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras([0, 5, 6, 7, 8, 9])) // ["cinco", "seis", "siete", "ocho", "nueve"]


const numeros = [1, 2, 6, 4, 3, 8, 9, 12]
//forEach
numeros.forEach( n => console.log(n));

//Map
const num = numeros.map( n => n * 2);
num;

//filter
const num2 = numeros.filter( n => n > 5);
num2;

//findIndex
const num3 = numeros.findIndex( n => n === 8);
num3;

//reduce
const num4 = numeros.reduce( (total, num) => total + num, 0);
num4;

//find
const num5 = numeros.find( n => n === 5);
num5;

const num6 = numeros.some( n => n === 8);
num6;

const num7 = numeros.every( n => n > 4);
num7;

const num8 = numeros.reverse()
num8;

const aleatorios = [500, 264, 981, 33, 146, 325]
const a = aleatorios.sort( (x, y) => {
    return x - y
})

// // const recibirText = prompt("Escribe aquí tu texto");
// let texto = "hola mundo";
