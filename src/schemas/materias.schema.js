const Joi = require('joi')

const materiaSchema = Joi.object().keys({
    nombre: Joi.string().min(5).max(50).required().messages({
        "string.min": "nombre debe tener como mínimo {#limit} caracteres",
        "string.max": "nombre debe tener como máximo {#limit} caracteres",
        "string.empty": "nombre no puede ser vacío",
        "any.required": "nombre es requerido"
    }),
    cuatrimestral: Joi.number().integer().min(1).required().messages({
        "number.base": "cuatrimestral debe ser un número entero",
        "any.required": "cuatrimestral es requerido"
    }),
    anio: Joi.number().integer().min(1).required().messages({
        "number.base": "anio debe ser un número entero",
        "number.min": "anio debe ser como mínimo {#limit}",
        "any.required": "anio es requerido"
    }),
    carreraId: Joi.number().integer().required().messages({
        "number.base": "carreraId debe ser un número entero",
        "any.required": "carreraId es requerido"
    })
})

module.exports = materiaSchema