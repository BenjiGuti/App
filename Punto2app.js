const express = require('express');
const path = require('path');
const app = express();

const productos = [];

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/agregar', (req, res) => {
    const nombre = req.body.nombre;
    const precio = req.body.precio;
    productos.push({ nombre, precio });
    res.redirect('/listar');
});

app.get('/listar', (req, res) => {
    let html = '<h2>Lista de productos</h2><ul>';
    productos.forEach(p => {
        html += `<li>${p.nombre} - $${p.precio}</li>`;
    });
    html += '</ul><a href="/">Volver</a>';
    res.send(html);
});

app.listen(3000, () => {
    console.log('Servidor funcionando en http://localhost:3000');
});

