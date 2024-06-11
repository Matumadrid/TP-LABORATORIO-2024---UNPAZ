const { Router } = require('express')
const carrerasController = require('../controllers/carreras.controller')
const carrerasMiddleware = require('../middlewares/carreras.middleware')
const schemaValidator = require('../middlewares/schemaValidator')
const carrerasSchema = require('../schemas/carreras.schema')
const route = Router()

route.get('/carreras', carrerasController.getAllcarreras)
route.get('/carreras/:id', carrerasMiddleware.existeCarreraById, carrerasController.getCarreraById)
route.post('/carreras', schemaValidator(carrerasSchema), carrerasController.createCarrera)
route.delete('/carreras/:id', carrerasMiddleware.existeCarreraById, carrerasController.deleteCarrera)

module.exports = route  