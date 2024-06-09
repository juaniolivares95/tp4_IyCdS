class Factura {
    constructor(id, cliente, fecha) {
        this.id = id;
        this.cliente = cliente;
        this.fecha = fecha;
        this.detalles = [];
    }

    agregarDetalle(detalle) {
        if (this.detalles.includes(detalle)) {
            throw new Error('El detalle ya ha sido agregado a la factura');
        }
        this.detalles.push(detalle);
    }

    calcularTotal() {
        return this.detalles.reduce((total, detalle) => total + detalle.calcularSubtotal(), 0);
    }
}

module.exports = Factura;

