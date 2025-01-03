/**
 * @typedef {Record<string, number>} GiftsCount
 */

/**
 * @typedef {{ missing: GiftsCount, extra: GiftsCount }} Result
 */

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */

/**
 * Santa Claus 🎅 está revisando la lista de regalos que debe entregar esta Navidad. Sin embargo,
 * algunos regalos faltan, otros están duplicados, y algunos tienen cantidades incorrectas.
 * Necesita tu ayuda para resolver el problema.
 *
 * Recibirás dos arrays:
 *
 * received: Lista con los regalos que Santa tiene actualmente.
 * expected: Lista con los regalos que Santa debería tener.
 * Tu tarea es escribir una función que, dado received y expected, devuelva un objeto con dos propiedades:
 *
 * missing: Un objeto donde las claves son los nombres de los regalos faltantes y los valores son las cantidades que faltan.
 * extra: Un objeto donde las claves son los nombres de los regalos extra o duplicados y los valores son las cantidades que sobran.
 * Ten en cuenta que:
 *
 * Los regalos pueden repetirse en ambas listas.
 * Las listas de regalos están desordenadas.
 * Si no hay regalos que falten o sobren, las propiedades correspondientes (missing o extra) deben ser objetos vacíos.
 */

function fixGiftList(received, expected) {
    //Creacion de los objetos
    let missing = {};
    let extra = {};
    let total = {
        missing: {},
        extra: {},
    };
    //Hacer un objeto con los valores unicos
    const all = new Set([...received, ...expected]);
    //Recorrer los arreglos y si ya existe la propiedad se le agrega uno, sino se inicia en 1
    received.forEach((toy) => {
        missing[toy] = missing[toy] + 1 || 1;
    });
    expected.forEach((toy) => {
        extra[toy] = extra[toy] + 1 || 1;
    });
    //Se recorre el objeto sin duplicados
    all.forEach((toy) => {
        if (Object.hasOwn(extra, toy) && Object.hasOwn(missing, toy)) {
            if (extra[toy] - missing[toy] > 0) {
                total.missing[toy] = extra[toy] - missing[toy];
            } else if (extra[toy] - missing[toy] < 0) {
                total.extra[toy] = missing[toy] - extra[toy];
            }
        } else if (Object.hasOwn(missing, toy)) {
            total.extra[toy] = missing[toy];
        } else if (Object.hasOwn(extra, toy)) {
            total.missing[toy] = extra[toy];
        }
    });

    return total;
}

console.log(
    fixGiftList(
        ['puzzle', 'car', 'doll', 'car'],
        ['car', 'puzzle', 'doll', 'ball']
    )
);
// Devuelve:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

console.log(
    fixGiftList(
        ['book', 'train', 'kite', 'train'],
        ['train', 'book', 'kite', 'ball', 'kite']
    )
);
// Devuelve:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

console.log(
    fixGiftList(
        ['bear', 'bear', 'car'],
        ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
    )
);
// Devuelve:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

console.log(fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear']));
// Devuelve:
// {
//   missing: {},
//   extra: {}
// }
