/**
 * 
 * Diseña un script que vaya leyendo números y guardándolos en un array. 
 * Una vez lleno mostrará el array y deberá decir cuantos números son pares 
 * y cuantos son impares. La entrada de datos termina cuando el usuario teclea 
 * 0 o un valor no numérico.
 * 
 * Intenta resolverlo sin usar métodos del objeto array, solo indices y longitudes de arrays.
 * 
 * No debe aceptar valores no numéricos (isNaN(valor) permite detectar valores no numéricos).
 * 
 * Aclaraciones: Por ejemplo si tecleo: 3,5,4,6,7,8, 11 el script me dirá que el array de entrada 
 * es [3,5,4,6,7,8, 11] y que hay 3 pares y 4 impares.
 */

let numeros = prompt("Inserta números para saber cuantos son pares y cuantos impares \nPresiona 0 para salir");
let par = 0;
let impar = 0;
let arreglo = [];

for (let i = 0; numeros !== 0 ; i++) {
    numeros = prompt("Inserta números aquí: \nPresiona 0 para salir");
    if(isNaN(numeros) || numeros == 0){
        alert(`${arreglo} y tiene ${par} pares y ${impar} impares.`)
        break;
    } else {
        arreglo.push(numeros);
        arreglo[i] % 2 === 0 ? par += 1 : impar += 1;
    }
}


