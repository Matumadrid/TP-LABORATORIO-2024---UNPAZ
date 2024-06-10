const { Router } = require('express')
const materiasController = require('../controllers/materias.controller')
const materiasMiddleware = require('../middlewares/materias.middleware')
const schemaValidator = require('../middlewares/schemaValidator')
const materiasSchema = require('../schemas/materias.schema')
const route = Router()

route.get('/materias', materiasController.getAllmaterias)
route.get('/materias/:id', materiasMiddleware.existeMateriaById, materiasController.getMateriaById )
route.post('/materias', schemaValidator(materiasSchema), materiasController.createMateria )

module.exports = route 