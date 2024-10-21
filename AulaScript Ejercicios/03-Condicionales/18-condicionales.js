/**
 * En una tienda coches se quiere redirigir a un cliente hacia una sección de 
 * acuerdo al tipo de coche que elija. Si elige tipo gasolina o 1 se le enviará 
 * a la oficina numero 100. Si elije el tipo diesel o 2 irá a la oficina 200 y 
 * si elige eléctrico o 3 se le enviará a la oficina 300.
 * 
 * Aclaraciones: Por ejemplo tecleo el número 2, el mesnaje me dirá que vaya a la oficina 200
 */

const oficina = prompt("Qué tipo de coche elige? \n1.Gasolina \n2.Diesel \n3.Electrico");

switch (oficina) {
    case "1":
    case "Gasolina":
        alert("Dirijase a la oficina número 100 ☺")
        break;
    case "2":
    case "Diesel":
        alert("Dirijase a la oficina número 200 ☺")
        break;
    case "3":
    case "Electrico":
        alert("Dirijase a la oficina número 300 ☺")
        break;
    default:
        alert("Escriba correctamente el nombre o escriba el número de la elección.")
        break;
}