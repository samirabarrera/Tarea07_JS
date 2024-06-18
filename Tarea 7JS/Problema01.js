//Escribe una función llamada `saludar` que tome un parámetro
//`nombre` y devuelva un saludo personalizado. Luego, crea un objeto
//`persona` con una propiedad `nombre`. Utiliza el método `call()` para
//llamar a la función `saludar` con el contexto del objeto `persona`.
//Si lo deseas apoyate en la siguiente estructura://

function saludar(nombre) {
    return `Hola, ${this.nombre}!`;
}

const persona = {
    nombre: 'Juan'
};

const saludo = saludar.call(persona, persona.nombre);
console.log(saludo);