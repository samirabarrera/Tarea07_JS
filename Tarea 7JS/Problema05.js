//Crea dos objetos, `persona1` y `persona2`, cada uno con una propiedad
//`nombre`. Define una función `presentar` que devuelva un mensaje de
//presentación utilizando la propiedad `nombre`. Usa `apply()` para
//invocar la función `presentar` con el contexto de `persona2`.

const persona1 = {
    nombre: 'Carlos'
};
const persona2 = {
    nombre: 'Ana'
};

function presentar() {
    return `Hola, soy ${this.nombre}.`;
}

const presentacion = presentar.apply(persona2);
console.log(presentacion);