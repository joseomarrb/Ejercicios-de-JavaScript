/**
 * En un restaurante los clientes pueden pedir menú de carne, pescado o verdura. 
 * Si pide carne se le ofrecerá como bebida vino tinto, si pide pescado se le ofrecerá 
 * vino blanco y si pide verdura se le ofrecerá agua

 * Si no elije el menú de la lista aparecerá la frase elija carne, pescado o verdura.
 * Aclaraciones: Por ejemplo he pedido carne, el ejercicio mostrará "¿Desea beber vino tinto?"
 */

const menu = prompt("¿Qué desea de nuestro menú? \n1.Carne \n2.Pescado \n3.Verdura");

switch (menu) {
    case "1":
    case "Carne":
    case "carne":
        alert("¿Desea beber vino tinto?")
        break;
    case "2":
    case "Pescado":
    case "pescado":
        alert("¿Desea beber vino blanco?")
        break;
    case "3":
    case "Verdura":
    case "verdura":
        alert("¿Desea beber agua?")
        break;
    default:
        alert("Elija carne, pescado o verdura.")
        break;
}