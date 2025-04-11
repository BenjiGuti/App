// datos.js

const productos = [];

function guardarProducto(nombre, precio) {
    productos.push({ nombre, precio });
}

function obtenerProductos() {
    return productos;
}

module.exports = {
    guardarProducto,
    obtenerProductos
};
