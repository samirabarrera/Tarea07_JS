//Crea un objeto `rectangulo` con propiedades `ancho` y `alto`, y un
//método `area` que calcule el área del rectángulo. Luego, crea un objeto
//`cuadrado` con una propiedad `lado`. Usa `call()` para invocar el método
//`area` del objeto `rectangulo` con el contexto del objeto `cuadrado`.

const rectangulo = {
    ancho: 0,
    alto: 0,
    area: function() {
    return this.ancho * this.alto;
}
};

const cuadrado = {
    lado: 5
};

const areaCuadrado = rectangulo.area.call({ ancho: cuadrado.lado, alto:
cuadrado.lado });
console.log(areaCuadrado); 