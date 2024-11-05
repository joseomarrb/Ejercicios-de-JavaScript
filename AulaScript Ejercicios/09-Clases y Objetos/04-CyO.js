/**
 * Construye una clase usando function para implementar una cuenta de efectivo. 
 * Poseerá dos propiedades: nombre del titular y saldo. Además debe tener dos 
 * métodos: ingresar() y retirar(). El primero incrementa el saldo en la cantidad 
 * indicada en el argumento y el segundo lo reduce. No se puede sacar más de lo 
 * que exista en el saldo. 
 * 
 * Aclaraciones: A los métodos los invocaremos con las llamadas ingresar(1000) o 
 * retirar(100) Tras ingresar el saldo será 1000 y trs retirar el saldo será 900..
 */

function CuentaEfectivo(titular, saldo) {
    this._titular = titular;
    this._saldo = saldo;
    this.ingresar = monto => this._saldo += monto;
    this.retirar = monto => {
        this._saldo -= monto;
        return this._saldo > 0 ? this._saldo : "EXCEDISTE EL SALDO";
    }
};

const gabriela = new CuentaEfectivo("Gabriela", 1000);
console.log(gabriela.ingresar(500))
console.log(gabriela.retirar(100))