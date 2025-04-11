App de Productos – Arquitectura en Tres Capas

¿Cómo se dividen las capas?

- Capa de Presentación (`app.js`)**: recibe las peticiones del usuario y maneja las rutas.
- Capa de Negocio (`negocio.js`)**: valida y procesa la lógica de agregar y listar productos.
- Capa de Datos (`datos.js`)**: guarda y devuelve los productos desde una lista en memoria.

Ventajas frente a la arquitectura monolítica

- Cada parte del código tiene una responsabilidad clara.
- Es más fácil de mantener y escalar.
- Permite testear la lógica sin necesidad de levantar el servidor.
- Si en el futuro se cambia la base de datos, solo se modifica `datos.js`.
