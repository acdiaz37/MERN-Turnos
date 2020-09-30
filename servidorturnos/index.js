const express = require('express');
const conectarDB = require('./config/db')

//crear el servidor

const app = express()

//conectando a la base de datos 
conectarDB()

//habilitar express.json
app.use(express.json({ extended: true}))


//heroku siempre espera la variable de entorno como PORT
const PORT = process.env.PORT || 4000;

//importando rutas
app.use('/api/usuarios', require('./routes/usuarios'))

//probando PAGINA PRINCIPAL 
/* app.get('/',(req,res) =>{
    res.send('Hola Mundo')
}) */

//ARRANCANDO APP
app.listen(PORT, () => {
    console.log(`El servidor funciona en el puerto ${PORT}`);
});



