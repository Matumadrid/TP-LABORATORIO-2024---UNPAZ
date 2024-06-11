const Joi = require('joi')

const carreraSchema = Joi.object().keys({
    id: Joi.number().integer().required().messages({
        "number.base": "id debe ser un número entero",
        "any.required": "id es requerido"
    }),
    nombre: Joi.string().min(5).max(50).required().messages({
        "string.min": "nombre debe tener como mínimo {#limit} caracteres",
        "string.max": "nombre debe tener como máximo {#limit} caracteres",
        "string.empty": "nombre no puede ser vacío",
        "any.required": "nombre es requerido"
    }),
    grado: Joi.string().min(5).max(50).required().messages({
        "string.min": "grado debe tener como mínimo {#limit} caracteres",
        "string.max": "grado debe tener como máximo {#limit} caracteres",
        "string.empty": "grado no puede ser vacío",
        "any.required": "grado es requerido"
    }),
    universidad: Joi.string().min(5).max(50).required().messages({
        "string.min": "universidad debe tener como mínimo {#limit} caracteres",
        "string.max": "universidad debe tener como máximo {#limit} caracteres",
        "string.empty": "universidad no puede ser vacío",
        "any.required": "universidad es requerido"
    })
})

module.exports = carreraSchema