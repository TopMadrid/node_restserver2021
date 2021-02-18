require('dotenv').config(); // coge las variables de entorno del archivo .env Gracias al paquete dotenv

const Server = require('./models/server'); // importación de la clase

const server = new Server(); // Se ejecutan las sentencias del constructor

server.listen();