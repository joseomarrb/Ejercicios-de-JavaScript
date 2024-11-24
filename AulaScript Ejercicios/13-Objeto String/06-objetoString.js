/**
 * Se trata de crear una función que decodifique un código de producto.
 * El código contiene tres partes separadas por un guión:
 * 
 * Dos caracteres:  CP: cliente particular, CE: empresa
 * 
 * Dos dígitos: 10 Local, 11 Autonómico, 12 Nacional, 20 Internacional
 * 
 * Una cifra que indica el número de años de antigüedad del cliente.
 * 
 * Si el código es erróneo la función deberá informar del tipo de erorr o errores.
 * 
 * Aclaraciones: Por ejemplo descifrar("CP-12-3") deberá devolver Cliente paticular 
 * nacional con 3 años de antiguedad
 */

function descifrar(codigo) {
    let resultado = '';
    let tipoCliente = codigo.slice(0, 2);
    let codigoUbicacion = codigo.slice(3, 5);
    let codigoAntiguedad = codigo.slice(6, 99);

    let ubicaciones = {
        '10': 'Local',
        '11': 'Automómico',
        '12': 'Nacional',
        '20': 'Internacional',
    }

    if (tipoCliente === 'CP') {
        resultado += 'Cliente Particular ';
    } else if (tipoCliente === 'CE') {
        resultado += 'Empresa '; 
    } else {
        return '| Error |';
    }

    if (ubicaciones[codigoUbicacion]) {
        resultado += `${ubicaciones[codigoUbicacion]} con ${codigoAntiguedad} años de antiguedad.`;
    } else {
        return '| Error |';
    }

    return resultado;
};

console.log(descifrar("CE-20-30"));
