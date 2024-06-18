//Crea un objeto `cuentaBancaria` con propiedades `titular` y `saldo`.
//Define una función `actualizarSaldo` que tome un monto y lo sume al
//saldo actual de la cuenta. Usa `apply()` para invocar la función
//`actualizarSaldo` con el contexto del objeto `cuentaBancaria` y un array
//que contenga el monto a agregar.

const cuentaBancaria = {
    titular: 'Juan Pérez',
    saldo: 1000
};
const monto = 500;

function actualizarSaldo(monto) {
    this.saldo += monto;
}
actualizarSaldo.apply(cuentaBancaria, [monto]);
console.log(cuentaBancaria);
