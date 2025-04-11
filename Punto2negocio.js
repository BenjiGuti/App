const datos = require('./datos');

function agregarProducto(nombre, precio) {
    if (!nombre || isNaN(precio)) {
        throw new Error("Datos inválidos");
    }
    datos.guardarProducto(nombre, parseFloat(precio));
}

function listarProductos() {
    return datos.obtenerProductos();
}

module.exports = {
    agregarProducto,
    listarProductos
};
