/**
 * En este ejercicio el script convertirá las notas numéricas de un examen 
 * en paabras: 0 - 4 suspenso, 5-6 aprobado, 7-8 notable, 9-10 sobresaliente.
 * 
 * Si tecleo 8 me dirá "Tu calificación es  notable"
 */

const nota = parseInt(prompt("Ingresa la nota que sacaste:"))

switch (true) {
    case (nota >= 9 && nota <= 10):
        alert("SOBRESALIENTE")
        break;
    case (nota >= 7 && nota <= 8):
        alert("NOTABLE")
        break;
        case ( nota >= 5 && nota <= 6):
        alert("APROBADO")
        break;
    case ( nota >= 0 && nota <= 4):
        alert("SUSPENSO")
        break;
    default:
        alert("Ingresa un numero del 0 al 10")
        break;
}
