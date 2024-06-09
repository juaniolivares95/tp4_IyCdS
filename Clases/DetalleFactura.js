class DetalleFactura {
    constructor(producto, cantidad) {
        if (cantidad < 0) {
            throw new Error('La cantidad no puede ser negativa');
        }
        this.producto = producto;
        this.cantidad = cantidad;
    }

    calcularSubtotal() {
        return this.producto.precio * this.cantidad;
    }
}

module.exports = DetalleFactura;
