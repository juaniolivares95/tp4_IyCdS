const Factura = require('../Clases/Factura');
const Cliente = require('../Clases/Cliente');
const Producto = require('../Clases/Producto');
const DetalleFactura = require('../Clases/DetalleFactura');

describe('Factura', () => {

    // Agregar detalle a la factura
    test('debería agregar un detalle a la factura', () => {
        const cliente = new Cliente(1, 'Juan Perez', 'Calle Falsa 123', '123456789', 'juan.perez@example.com');
        const factura = new Factura(1, cliente);
        const producto = new Producto(2, 'Laptop', 1500);
        const detalleFactura = new DetalleFactura(producto, 2);
        factura.agregarDetalle(detalleFactura);
        expect(factura.detalles.length).toBe(1);  // Verifica que el detalle ha sido agregado
        expect(factura.detalles[0]).toBe(detalleFactura);  // Verifica que el detalle agregado es correcto
    });

    // Calcular el total de la factura
    test('debería calcular el total correctamente', () => {
        const cliente = new Cliente(1, 'Juan Perez', 'Calle Falsa 123', '123456789', 'juan.perez@gmail.com');
        const factura = new Factura(1, cliente, new Date());

        const producto1 = new Producto(1, 'Laptop', 1500);
        const detalle1 = new DetalleFactura(producto1, 1);

        const producto2 = new Producto(2, 'Mouse', 20);
        const detalle2 = new DetalleFactura(producto2, 2);

        factura.agregarDetalle(detalle1);
        factura.agregarDetalle(detalle2);

        expect(factura.calcularTotal()).toBe(1540);  // Verifica que el total es correcto
    });

     // Validar que no se puedan agregar detalles duplicados
     test('debería lanzar un error si se intenta agregar un detalle duplicado', () => {
        const cliente = new Cliente(1, 'Juan Perez', 'Calle Falsa 123', '123456789', 'juan.perez@gmail.com', 30, '2023-01-01', 'Masculino');
        const factura = new Factura(1, cliente, new Date());
        const producto = new Producto(1, 'Laptop', 1500);
        const detalle = new DetalleFactura(producto, 1);
        factura.agregarDetalle(detalle);
        expect(() => factura.agregarDetalle(detalle)).toThrow('El detalle ya ha sido agregado a la factura');
    });

    // Validar que el total sea cero si no hay detalles
    test('debería calcular un total de 0 si no hay detalles', () => {
        const cliente = new Cliente(1, 'Juan Perez', 'Calle Falsa 123', '123456789', 'juan.perez@gmail.com', 30, '2023-01-01', 'Masculino');
        const factura = new Factura(1, cliente, new Date());
        expect(factura.calcularTotal()).toBe(0);
    });
});
