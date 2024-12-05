/**
 * Escriba una función que ayude a los desarrolladores a probar su código. 
 * Debe aceptar cualquier valor val y devolver un objeto con las siguientes dos funciones.
 * 
 * toBe(val) acepta otro valor y devuelve verdadero si los dos valores son iguales 
 * entre sí. Si no son iguales, debe generar un error "No es igual".
 * 
 * notToBe(val) acepta otro valor y devuelve verdadero si los dos valores no son 
 * iguales entre sí. Si son iguales, debe generar un error "Igual".
 */

var expect = function(val) {
    return {
            toBe: (val2) => {
            if (val !== val2){
                throw new Error("Not Equal");
            } else{
                return true;
            }
        },
        notToBe: (val2) => {
            if (val === val2){
                throw new Error("Equal");
            } else{
                return true;
            }
        }
    }
};

/**
* expect(5).toBe(5); // true
* expect(5).notToBe(5); // throws "Equal"
*/