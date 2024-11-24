/**
 * En esta ocasión se trata de crear una función que reciba como argumento una 
 * frase con letras y números. La función debe devolver la suma de todos los 
 * dígitos contenidos en la frase
 * 
 * Aclaraciones: Al ejecutar cambiaCars("Estamos a 7 días de navidad y faltan 10 días 
 * para fin del año 2022), deberá devolver el número 14 (7+1 + 0 +2+0+2+2)
 */

let suma = 0;
function cambiaCars(frase) {
    for (let i = 0; i < frase.length; i++) {
        if (Number.isInteger(parseInt(frase[i]))){
            suma += parseInt(frase[i])
        }
    }
    return suma;
}

console.log(cambiaCars("Estamos a 7 días de navidad y faltan 10 días para fin del año 2022"));