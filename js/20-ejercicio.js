/**Generar contraseña
 * 
Escribir una función llamada password que reciba un string y retorne un nuevo string realizando los siguientes cambios:

Las mayúsculas se reemplazan por minúsculas.
Se eliminan los espacios en blanco.
Reemplaza el caracter “a” por “4”.
Reemplaza el caracter “e” por “3”.
Reemplaza el caracter “i” por “1”.
Reemplaza el carater “o” por “0”. */

function password(string) {
    return string
    .toLowerCase()
    .replaceAll("a", "4")
    .replaceAll("e", "3")
    .replaceAll("i", "1")
    .replaceAll("o", "0")
    .replaceAll(" ", "");
    
}

console.log(password("hola")) // "h0l4"
console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("Amo a mi novia liz y a mami apolonia")) // "3st43sun4pru3b4"
console.log(password("Dios es el mejor el es amor")) // "3st43sun4pru3b4"
console.log(password("")) // ""