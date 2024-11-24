/**
 * Crear una función que reciba como parámetro una lista de palabras separadas 
 * por coma. La función deberá agrupar las palabras que comienzan por la misma 
 * letra en objetos de la forma inicial: lista de palabras. No se debe distinguir 
 * entre mayúculas y minúsculas. Las palabras deben mantener su tipo de mayúsculas o minúsculas
 * 
 * Aclaraciones: Un ejemplo de uso podría ser:
 * 
 * agrupar("Avion, avispa, tigre, leon, Tejón, lince, abeja, abejorro"), resultado:
 * 
 * {a: 'abeja, abejorro, Avion, avispa', l: 'leon, lince', t: 'Tejón, tigre'}
 */

function agrupar(lista) {
    const division = lista.split(', ');
    const objeto = {};

    division.forEach(palabra => {
        const letraInicial = palabra[0].toLowerCase();
        if (!objeto[letraInicial]) {
            objeto[letraInicial] = [];
        }
        objeto[letraInicial].push(palabra);
    });

    for (let letra in objeto) {
        objeto[letra] = objeto[letra].join(', ');
    }
    return objeto;
}

console.log(agrupar("Avion, avispa, tigre, leon, Tejón, lince, abeja, abejorro"));

