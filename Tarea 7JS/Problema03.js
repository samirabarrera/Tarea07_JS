//Crea dos objetos, `persona1` y `persona2`, cada uno con una propiedad
//`nombre`. Define una función `saludar` que devuelva un mensaje de
//saludo utilizando la propiedad `nombre`. Usa `call()` para invocar la
//función `saludar` con el contexto de `persona2`.

const persona1 = {
    nombre: 'Juan'
};
const persona2 = {
    nombre: 'María'
};

function saludar() {
    return `Hola, mi nombre es ${this.nombre}.`;
}

const saludo = saludar.call(persona2);
console.log(saludo);