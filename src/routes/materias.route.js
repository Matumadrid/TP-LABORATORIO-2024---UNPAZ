const { Router } = require('express')
const materiasController = require('../controllers/materias.controller')
const materiasMiddleware = require('../middlewares/materias.middleware')
const route = Router();

route.get('/materias', materiasController.getAllmaterias)
route.get('/materias/:id', materiasMiddleware.existeMateriaById, materiasController.getMateriaById)
route.delete('/materias/:id', materiasMiddleware.existeMateriaById, materiasController.deleteMateria)

module.exports = route