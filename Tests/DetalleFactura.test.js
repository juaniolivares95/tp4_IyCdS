const DetalleFactura = require('../Clases/DetalleFactura');
const Producto = require('../Clases/Producto');

describe('DetalleFactura', () => {

    // Constructor de DetalleFactura
    test('debería crear un detalle de factura correctamente', () => {
        const producto = new Producto(1, 'Laptop', 1500);
        const detalleFactura = new DetalleFactura(producto, 2);
        expect(detalleFactura.producto).toBe(producto);  // Verifica que el producto es el correcto
        expect(detalleFactura.cantidad).toBe(2);  // Verifica que la cantidad es la correcta
    });

    // Calcular el subtotal
    test('debería calcular el subtotal correctamente', () => {
        const producto = new Producto(1, 'Laptop', 1500);
        const detalleFactura = new DetalleFactura(producto, 2);
        expect(detalleFactura.calcularSubtotal()).toBe(3000);  // Verifica que el subtotal es correcto
    });

    // Validación para cantidad negativa
    test('debería lanzar un error si la cantidad es negativa', () => {
        const producto = new Producto(3, 'Tablet', 300);
        expect(() => {
            new DetalleFactura(producto, -1);  // Intenta crear un detalle con cantidad negativa
        }).toThrow('La cantidad no puede ser negativa');  // Verifica que se lanza el error correcto
    });

    // Validación para cantidades grandes
    test('debería manejar cantidades grandes correctamente', () => {
        const producto = new Producto(4, 'Tablet', 300);
        const detalleFactura = new DetalleFactura(producto, 100);
        expect(detalleFactura.calcularSubtotal()).toBe(30000);  // Verifica que el subtotal es correcto para una cantidad grande
    });
});
