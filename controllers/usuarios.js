const { request, response } = require('express');


const usuariosGet = (req = request, res = response ) => { //Endpoint // La ruta real ya está especificada en la clase en server.js

    const { q, nombre = 'no name', apikey} = req.query; // recoge parametros opcionales con ? separados por &. Valor default 'no name'
    res.json({
        msg: 'get API - controlador',
        q, 
        nombre, 
        apikey
    });
}

const usuariosPut = (req, res = response ) => { //Endpoint // La ruta real ya está especificada en la clase en server.js

    //const id= req.params.id;
    const {id} = req.params; // Recoge los parametros obligatorio precedidos de / Por ejemplo usuario/10

    res.status(400).json({
        msg: 'put API',
        id
    });
}

const usuariosPost = (req, res = response ) => { //Endpoint // La ruta real ya está especificada en la clase en server.js

    const {nombre, edad} = req.body; // recoge los parametros pasados desde el body con raw por ejemplo

    res.status(201).json({
        msg: 'post API',
        nombre, 
        edad
    });
};

const usuariosDelete = (req, res = response) => { //Endpoint // La ruta real ya está especificada en la clase en server.js
    res.json({
        msg: 'delete API'
    });
};

const usuariosPatch = (req, res = response ) => { //Endpoint // La ruta real ya está especificada en la clase en server.js
    res.json({
        msg: 'patch API'
    });
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete

}