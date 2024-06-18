//Crea un objeto `libro` con propiedades `titulo` y `autor`. Define una
//función `agregarCapitulos` que tome un array de capítulos y los agregue
//como una nueva propiedad `capitulos` al objeto `libro`. Usa `apply()`
//para invocar la función `agregarCapitulos` con el contexto del objeto
//`libro` y un array de capítulos.

const libro = {
    titulo: 'El Quijote',
    autor: 'Miguel de Cervantes'
};
const capitulos = ['Capítulo 1: En un lugar de la Mancha', 'Capítulo 2: De los molinos de viento'];

function agregarCapitulos(capitulos) {
    this.capitulos = capitulos;
}

agregarCapitulos.apply(libro, [agregarCapitulos]);
console.log(libro);