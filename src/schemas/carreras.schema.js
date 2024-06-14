const Joi = require('joi')

const carreraSchema = Joi.object().keys({
    nombre: Joi.string().min(5).max(50).required().messages({
        "string.min": "nombre debe tener como mínimo {#limit} caracteres",
        "string.max": "nombre debe tener como máximo {#limit} caracteres",
        "string.empty": "nombre no puede ser vacío",
        "any.required": "nombre es requerido"
    }),
    grado: Joi.string().required().valid('Licenciatura', 'Tecnicatura').messages({
        'any.required': 'Por favor, ingrese un grado para la carrera',
        'any.only': 'Los grados válidos son Licenciatura o Técnicatura'
    }),
    universidad: Joi.string().min(5).max(50).required().messages({
        "string.min": "universidad debe tener como mínimo {#limit} caracteres",
        "string.max": "universidad debe tener como máximo {#limit} caracteres",
        "string.empty": "universidad no puede ser vacío",
        "any.required": "universidad es requerido"
    })
})

module.exports = carreraSchema