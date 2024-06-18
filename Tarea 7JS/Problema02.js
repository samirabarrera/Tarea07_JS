//Crea un objeto `auto` con una propiedad `marca` y un método
//`mostrarMarca` que devuelva un mensaje con la marca del auto. Luego,
//crea otro objeto `moto` con una propiedad `marca`. Utiliza el método
//`call()` para llamar al método `mostrarMarca` del objeto `auto` con el
//contexto del objeto `moto`.

const auto = {
    marca: 'Toyota',
    mostrarMarcar: function() {
    return `La marca del auto es ${this.marca}.`;
    }
};
const moto = {
    marca: 'Honda'
};

const mensaje = auto.mostrarMarcar.call(moto);
console.log(mensaje); 