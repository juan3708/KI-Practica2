import express from 'express';
import sequelize from './database/db';
const app = express();

//Configuración
const PORT = process.env.PORT || 3000;

//Rutas
app.get('/', function (req, res){
    res.send('HOLA');
});

//Levantamiento servidor
app.listen(PORT, function () {
    console.log('Server on port 3000');

    //Conexion Base de datos
    sequelize.authenticate().then(() => {
        console.log("Nos hemos conectado a la base de datos");
    }).catch(error => {
        console.log('Se ha producido un error', error);
    })
});
