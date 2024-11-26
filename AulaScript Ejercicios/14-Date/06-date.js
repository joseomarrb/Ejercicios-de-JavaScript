/**
 * En este ejercicio vas a crear una función capaz de determinar el número de 
 * horas, minutos y segundos entre dos horas de un mismo día. La función que 
 * puedes llamar intervalo tiene dos argumentos string con los tiempos en 
 * formato hh:mm:ss
 * 
 * Aclaraciones: Si llamo a intervalo("12:20:30" , "14:25:00")  esto debería 
 * dar como resultado 2horas, 4minutos y 30 segundos.
 */

function intervalo(horaInicial, horaFinal) {
    const datosIniciales = { 
        hora: parseInt(horaInicial.slice(0, 2)), 
        minutos: parseInt(horaInicial.slice(3, 5)),
        segundos: parseInt(horaInicial.slice(6, Infinity)),
    };

    const datosFinales = {
        hora: parseInt(horaFinal.slice(0, 2)), 
        minutos: parseInt(horaFinal.slice(3, 5)),
        segundos: parseInt(horaFinal.slice(6, Infinity)),
    }

    const resultsHora = Math.abs(datosIniciales.hora - datosFinales.hora);
    const resultsMinutos = Math.abs(datosIniciales.minutos - datosFinales.hora);
    const resultSegundos = Math.abs(datosIniciales.segundos - datosFinales.segundos);

    return `${resultsHora} horas ${resultsMinutos} Minutos ${resultSegundos} segundos`
}

console.log(intervalo("19:20:30" , "14:25:00"));