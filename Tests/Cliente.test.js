const Cliente = require('../Clases/Cliente');

describe('Cliente', () => {
    // Constructor de cliente
    test('debería crear un cliente correctamente', () => {
        const cliente = new Cliente(1, 'Juan Perez', 'Calle Falsa 123', '123456789', 'juan.perez@gmail.com');
        expect(cliente.id).toBe(1);
        expect(cliente.nombre).toBe('Juan Perez');
        expect(cliente.direccion).toBe('Calle Falsa 123');
        expect(cliente.telefono).toBe('123456789');
        expect(cliente.email).toBe('juan.perez@gmail.com');
    });

    // Validación para que el teléfono sea un entero
    test('debería validar que el teléfono contenga solo dígitos', () => {
        expect(() => {
            new Cliente(4, 'Pedro Gomez', 'Calle Falsa 123', '12345abc', 'pedro.gomez@gmail.com');
        }).toThrow('El teléfono debe contener solo dígitos');
    });

    // Validación para que el email tenga un formato correcto
    test('debería validar que el email tenga un formato correcto', () => {
        expect(() => {
            new Cliente(6, 'Luis Garcia', 'Calle Falsa 789', '123456789', 'luis.garcia.com');
        }).toThrow('El formato del email es incorrecto');
    });

    // Validación para que el email no tenga espacios
    test('debería validar que el email no tenga espacios', () => {
        expect(() => {
            new Cliente(7, 'Marcos Lopez', 'Calle Verdadera 456', '123456789', 'marcos lopez@example.com');
        }).toThrow('El formato del email es incorrecto');
    });

    // Manejar direcciones vacías correctamente
    test('debería manejar direcciones vacías correctamente', () => {
        const cliente = new Cliente(3, 'Carlos Ramirez', '', '1122334455', 'carlos.ramirez@gmail.com');
        expect(cliente.direccion).toBe('');
    });

    // Manejar nombres largos correctamente
    test('debería manejar nombres largos correctamente', () => {
        const cliente = new Cliente(2, 'Ana Maria Perez Gonzalez', 'Avenida Siempre Viva 742', '987654321', 'ana.perez@gmail.com');
        expect(cliente.nombre).toBe('Ana Maria Perez Gonzalez');
    });
});

