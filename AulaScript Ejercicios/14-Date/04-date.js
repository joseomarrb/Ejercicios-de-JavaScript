/**
 * Crea una función diferencia que sea capaz de calcular el número de días 
 * transcurridos entre dos fechas dadas en la forma "año/mes/dia". El resultado 
 * debe ser un valor absoluto, o sea, el primer argumento será una fecha anterior 
 * o posterior al segundo, pero el resultado será un número de días, sin signo
 * 
 * Aclaraciones: Por ejemplo si pido diasEntre("2023/03/10", "2023/03/15") 
 * deberá devolver que el número entre esas fechas hay 5 días
 */

function diasEntre(primeraFecha, segundaFecha) {
    const fechaAnterior = parseInt(primeraFecha.slice(8, Infinity));
    const fechaSegunda = parseInt(segundaFecha.slice(8, Infinity));
    return `${Math.abs(fechaAnterior - fechaSegunda)} días`
};

console.log(diasEntre("2023/03/10", "2023/03/15"));