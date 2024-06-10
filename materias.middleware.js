const { materias } = require('../controllers/materias.controller')

const existeMateriaById = (req, res, next) => {
    const id = req.params.id
    const idx = materias.findIndex( s => s.id == id)
    if (idx < 0) {
        return res.status(404).json({
            error: `No se encuentra la Materia con el id ${id}`
        })
    }
    next()
}

module.exports = { existeMateriaById }