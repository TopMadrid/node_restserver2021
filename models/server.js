const express = require('express');
const cors = require('cors');




class Server {

    constructor () {
        this.app = express();
        this.port = process.env.PORT; //process.env.PORT es una variable global en el proyecto
        this.usuariosPath = '/api/usuarios';

        // Middlewares
        this.middlewares();

        //Rutas de mi aplicacion

        this.routes(); 
    }
    
    middlewares(){ 

        //CORS - Cross Origin Resource Sharing
        this.app.use ( cors()); //Usado para el aceptar o no peticiones desde otros servidores.

        // Lectura y parseo del body
        this.app.use( express.json() ); // Conseguimos que se recoja los objetos que pasa el cliente en el body 

        // Relacionado a la carpeta pública
        // directorio público es el patch '/' (solo con el nombre del dominio)
        this.app.use(express.static('public') );// use es la palabra clave para indicar que es un middleware
    }

    routes() {
       this.app.use(this.usuariosPath, require('../routes/usuarios')); // Cuando entren request con el path /api/usuarios que vaya al archivo ../routes/usuarios
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}

module.exports = Server; // para exportar la clase