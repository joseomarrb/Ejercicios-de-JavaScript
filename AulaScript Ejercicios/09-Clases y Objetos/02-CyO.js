/**
 * Define un objeto, mediante una expresión, que tenga dos propiedades: precio 
 * y descuento y un método neto. El método calculará el precio con el descuento 
 * aplicado. Los valores se pedirán por teclado
 * 
 * Aclaraciones: Por ejemplo objeto vestido, precio 400 y descuento 10. El método 
 * devolverá como resultado 360 (400 - 10*400/100).
 */

let precio = parseInt(prompt("Inserta el precio aquí"));
let descuento = parseInt(prompt("Inserta el descuento aquí"));

const objeto = {
    precio,
    descuento,
    descuentoAplicado() {
        return (this.precio - this.descuento * this.precio / 100);
    }
};

console.log(objeto.descuentoAplicado())