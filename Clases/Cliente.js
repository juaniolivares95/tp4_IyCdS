class Cliente {
    constructor(id, nombre, direccion, telefono, email) {
        if (!/^\d+$/.test(telefono)) {
            throw new Error('El teléfono debe contener solo dígitos');
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            throw new Error('El formato del email es incorrecto');
        }
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
    }
}

module.exports = Cliente;
