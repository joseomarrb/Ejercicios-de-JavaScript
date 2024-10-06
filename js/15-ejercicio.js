/**Transcribir ADN a ARN
Escribir una función llamada transcribir que reciba un string (una cadena de ADN)
y retorne otro string (su complemento ARN).

Los complementos son los siguientes:

G -> C
C -> G
T -> A
A -> U */

function transcribir(string) {
    let nuevo = string.replace("G", "C").replace("C", "G").replace("T", "A").replace("A", "U")
    return nuevo;
}

console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"


