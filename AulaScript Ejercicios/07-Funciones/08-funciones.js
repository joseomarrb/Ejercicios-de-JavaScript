/**
 * Escribe una función que reciba como argumento un precio y 
 * el porcentaje de impuestos. La función devolverá el valor 
 * total a pagar, teniendo en cuenta que al precio sin impuestos 
 * se le descuenta un porcentaje del 10% si es mayor de 100 euros.
 * 
 * Aclaraciones: Si he comprado por valor de 200 euros con un impuesto 
 * del 5%, me descuentan un 10% por tanto pago 180 euros más los 
 * impuestos que son el 5% de 180. En total 180 euros.
 */

function impuestos(precio, porcentaje) {
    return precio > 100 ? precio - (precio * (porcentaje = 0.10)) 
                        : precio - (precio * (porcentaje = 0.05));
}

console.log(impuestos(90, 5));