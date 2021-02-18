const { Router} = require('express'); // Desestructuramos para llamar a esa funcion de express

const { usuariosGet, usuariosPost, usuariosPut, usuariosPatch, usuariosDelete } = require('../controllers/usuarios');

const router = Router();

//this.app.get('/api', (req, res) => { //Endpoint 
router.get('/', usuariosGet ); // Mandamos la referencia a la funcion. No estoy ejecutando la funcion con ()

//this.app.put('/api', (req, res) => { //Endpoint 
router.put('/:id', usuariosPut );

//this.app.post('/api', (req, res) => { //Endpoint 
router.post('/', usuariosPost );

//this.app.delete('/api', (req, res) => { //Endpoint 
router.delete('/', usuariosDelete );

//this.app.patch('/api', (req, res) => { //Endpoint 
router.patch('/', usuariosPatch );
//RestEndpoints ------- RestAPI







module.exports = router;