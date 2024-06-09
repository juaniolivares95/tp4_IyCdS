class Cliente {
    constructor(id, nombre, direccion, telefono, email) {
        if (!/^\d+$/.test(telefono)) {
            throw new Error('El teléfono debe contener solo dígitos');
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            throw new Error('El formato del email es incorrecto');
        }
        if (nombre.length > 50) {
            throw new Error('El nombre no puede tener más de 50 caracteres');
        }
        if (telefono.length < 7) {
            throw new Error('El teléfono debe tener al menos 7 dígitos');
        }
        if (!/^[a-zA-Z\s]+$/.test(nombre)) {
            throw new Error('El nombre contiene caracteres no válidos');
        }
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
    }

    actualizarDireccion(nuevaDireccion) {
        if (typeof nuevaDireccion !== 'string') {
            throw new Error('La dirección debe ser una cadena de texto');
        }
        this.direccion = nuevaDireccion;
    }
}

module.exports = Cliente;
