const express = require('express');     // Levantar/crear un servidor.
const app = express();                  // Debemos guardar la ejecución de la función en un variable llamada app generalmente.

const path = require('path');           // Me permite independizar del sistema operativo y que no haya inconvenientes con las rutas.

app.use(express.static(path.resolve(__dirname, './public')));   // Indicamos a Express que esta carpeta será pública.

const puerto = process.env.PORT || 3000

app.listen(puerto, () => console.log('Servidor corriendo en el puerto 3000'));   // Levantamos el servidor que estará escuchando peticiones en el puerto 3000.

// Ruta para la raíz:
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})