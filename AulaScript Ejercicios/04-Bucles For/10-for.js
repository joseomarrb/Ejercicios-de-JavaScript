/**
 * Programa un script que pida al usuario que teclee 4 números 
 * (uno cada vez). Con esos números el programa deberá calcular 
 * la media aritmética. O sea la suma de los 4 números dividida entre 4
 * 
 * Aclaraciones: El progrma pide 4 veces al usuario que telcee un número 
 * y este escribe 5,9,10,12. El programa dirá "La media es 9"
 */

let num, media, suma = 0; 

for (let i = 1; i <= 4; i++) {
    num =  parseInt(prompt("Inserta el primer número aquí:"));
    suma += num;
}

media = suma / 4;
console.log(media)

