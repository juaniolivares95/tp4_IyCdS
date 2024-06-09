const Producto = require('../Clases/Producto');

describe('Producto', () => {
    // Validar el constructor
    test('debería crear un producto correctamente', () => {
        const producto = new Producto(1, 'Laptop', 1500);
        expect(producto.id).toBe(1);               // Verifica que el id sea correcto
        expect(producto.nombre).toBe('Laptop');    // Verifica que el nombre sea correcto
        expect(producto.precio).toBe(1500);        // Verifica que el precio sea correcto
    });

    // Validación para precios negativos
    test('debería lanzar un error si el precio es negativo', () => {
        expect(() => {
            new Producto(3, 'Smartphone', -500);   // Crea un producto con precio negativo
        }).toThrow('El precio no puede ser negativo'); // Verifica que se lance el error correcto
    });

    // Validación para precios muy altos
    test('debería manejar precios muy altos correctamente', () => {
        const producto = new Producto(5, 'Supercomputadora', 1000000);
        expect(producto.precio).toBe(1000000);    // Verifica que el precio sea correcto para un valor alto
    });
});
