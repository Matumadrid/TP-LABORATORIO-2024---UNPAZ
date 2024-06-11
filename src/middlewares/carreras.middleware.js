const db = require('../../models');
const Carreras = db.Carreras;

const existeCarreraById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const carrera = await Carreras.findByPk(id);
        if (!carrera) {
            return res.status(404).json({ error: 'Carrera no encontrada' });
        }
        req.carrera = carrera; 
        next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { existeCarreraById }