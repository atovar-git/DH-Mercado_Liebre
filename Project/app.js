const express = require('express');     // Levantar/crear un servidor.
const app = express();                  // Debemos guardar la ejecución de la función en un variable llamada app generalmente.

const path = require('path');           // Me permite independizar del sistema operativo y que no haya inconvenientes con las rutas.

app.use(express.static(path.resolve(__dirname, './public')));   // Indicamos a Express que esta carpeta será pública.

const port = process.env.PORT || 3000
app.listen(port, () => console.log('Servidor corriendo en: {HOSTNAME: ' + process.env.APP_URL + ', PORT: ' + port + '}'));   // Levantamos el servidor que estará escuchando peticiones en el puerto 3000.
console.log(process.env);
// Ruta para la raíz:
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

// ESTA ES NUEVA la creé para que pueda direccionar a la dirección indicada en el .html (Crar cuenta).
app.get('/register.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.get('/login.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})