const { carreras } = require('../controllers/carreras.controller')

const existeCarreraById = (req, res, next) => {
    const id = req.params.id
    const idx = carreras.findIndex( s => s.id == id)
    if (idx < 0) {
        return res.status(404).json({
            error: `No se encuentra la Carrera con el id ${id}`
        })
    }
    next()
}

module.exports = { existeCarreraById }