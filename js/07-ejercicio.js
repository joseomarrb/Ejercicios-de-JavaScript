/**Contar rango de números
 * 
Escribir una función llamada contarRango que reciba dos números
y retorne cuántos números que hay entre ellos (excluyéndolos):

Nota: Utiliza un ciclo en tu solución. Puedes asumir que el primer
número va a ser menor que el segundo. */

function contarRango(num1, num2) {
    while ( num1 < num2 ){
        return ( num2 -1 ) - num1
    }
    
}

console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0
console.log(contarRango(50, 60)) // 0
console.log(contarRango(45, 997)) // 0