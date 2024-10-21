/**
 * Un comerciante hace descuentos a sus clientes de la siguiente forma:
 * Si ha comprado menos de 100 euros no hay descuento
 * Si la compra está entre 100 y 300 euros le descuenta un 5%
 * Si la compra está por encima de 300 hasta 500 euros le descuenta un 10%
 * Si la compra supera los 400 euros le descuenta un 15%
 * 
 * Aclaraciones: Es decir: hago una compra de 150 euros pago 150 - 5% de 150, o sea 142,5 euros.
 */

const compra = parseInt(prompt("Ingresa de cuanto fue tu compra aquí?"))

if (compra >= 100 && compra <= 300) {
    alert(`Tienes un descuento del 5%, el total de tu compra es ${compra - (compra * 0.05)} euros.`)
} else if(compra > 300 && compra <= 500){
    alert(`Tienes un descuento del 5%, el total de tu compra es ${compra - (compra * 0.10)} euros.`)
} else if(compra > 500) {
    alert(`Tienes un descuento del 15%, el total de tu compra es ${compra - (compra * 0.15)} euros.`)
} else {
    alert(`No tienes descuento, el total de tu compra es ${compra} euros.`)
}