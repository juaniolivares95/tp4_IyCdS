class Producto {
    constructor(id, nombre, precio) {
        if (precio < 0) {
            throw new Error('El precio no puede ser negativo');
        }
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

module.exports = Producto;
