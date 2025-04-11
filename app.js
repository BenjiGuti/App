const express = require('express');
const path = require('path');
const app = express();

// Lista en memoria para los productos
const productos = [];

app.use(express.urlencoded({ extended: true }));

// Mostrar el formulario
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Agregar producto
app.post('/agregar', (req, res) => {
    const nombre = req.body.nombre;
    const precio = req.body.precio;
    productos.push({ nombre, precio });
    res.redirect('/listar');
});

// Mostrar lista de productos
app.get('/listar', (req, res) => {
    let html = '<h2>Lista de productos</h2><ul>';
    productos.forEach(p => {
        html += `<li>${p.nombre} - $${p.precio}</li>`;
    });
    html += '</ul><a href="/">Volver</a>';
    res.send(html);
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor funcionando en http://localhost:3000');
});

/*
Esta app es monolítica porque todo está junto:
- El servidor, la lógica, las rutas y la vista están en el mismo archivo o en la misma carpeta.
Desventajas:
- Difícil de mantener si crece.
- No está separada por capas (modelo, vista, controlador).
- Poco escalable para proyectos grandes.
*/
