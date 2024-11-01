/**
 * Escibe una función que devuelva el siglo al que correponde un año 
 * que se la pasa como argumento. El siglo 1 va del año 1 al 100, el 
 * siglo 2 va del 101 al 200....
 * 
 * Aclaraciones: Por ejemplo si le pido siglo(1910) me dirá siglo 20
 */

function siglo(num) {
    switch (true) {
        case (num <= 100):
            return "Siglo 1";
            break;
        case (num >= 101 && num <= 200):
            return "Siglo 2";
            break;
        case (num >= 201 && num <= 300):
            return "Siglo 3"
            break;
        case (num >= 301 && num <= 400):
            return "Siglo 4"
            break;
        case (num >= 401 && num <= 500):
            return "Siglo 5"
            break;
        case (num >= 501 && num <= 600):
            return "Siglo 6"
            break;
        case (num >= 601 && num <= 700):
            return "Siglo 7"
            break;
        case (num >= 701 && num <= 800):
            return "Siglo 8"
            break;
        case (num >= 801 && num <= 900):
            return "Siglo 9"
            break;
        case (num >= 901 && num <= 1000):
            return "Siglo 10"
            break;
        case (num >= 1001 && num <= 1100):
            return "Siglo 11"
            break;
        case (num >= 1101 && num <= 1200):
            return "Siglo 12"
            break;
        case (num >= 1201 && num <= 1300):
            return "Siglo 13"
            break;
        case (num >= 1301 && num <= 1400):
            return "Siglo 14"
            break;
        case (num >= 1401 && num <= 1500):
            return "Siglo 15"
            break;
        case (num >= 1501 && num <= 1600):
            return "Siglo 16"
            break;
        case (num >= 1601 && num <= 1700):
            return "Siglo 17"
            break;
        case (num >= 1701 && num <= 1800):
            return "Siglo 18"
            break;
        case (num >= 1801 && num <= 1900):
            return "Siglo 19"
            break;
        case (num >= 1901 && num <= 2000):
            return "Siglo 20"
            break;
        case (num >= 2001 && num <= 2100):
            return "Siglo 21"
            break;
        default:
            return "No hemos llegado a ese siglo :(";
            break;
    }
}

console.log(siglo(1910))