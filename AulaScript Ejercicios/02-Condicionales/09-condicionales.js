/**
 * Una tienda aplica un descuento del 15% para las compras que incluyan 
 * más de 10 articulos iguales cuyo precio sea superior a 40 euros. 
 * Tu programa debe comprobar y calcular la cantidad a pagar sabiendo 
 * el número de articulos y el precio de cada uno.
 * 
 * Aclaraciones: Por ejemplo si compras 20 articulos de 50 euros se te 
 * descuenta un 15% del total pagarías 20*50 - 20*50*0.15 = 850 eruos.
 */

const articulos = parseInt(prompt("Introduce el número de articulos que compraste:"))
const precio = parseInt(prompt("Introduce el precio estimado de los articulos que compraste:"));
const descuento = (articulos * precio) - articulos * precio * 0.15

if (articulos > 10 && precio > 40) {
    alert(`Se te ha aplicado un descuento del 15%, tu total a pagar es ${descuento} euros.`)
} else {
    alert(`Gracias por su compra, el total a pagar es ${articulos * precio} euros.`)
}
