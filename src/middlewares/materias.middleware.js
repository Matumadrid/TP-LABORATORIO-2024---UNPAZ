const db = require('../../models');
const Materias = db.Materias;

const existeMateriaById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const materia = await Materias.findByPk(id);
        if (!materia) {
            return res.status(404).json({ error: 'Materia no encontrada' });
        }
        req.materia = materia; 
        next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { existeMateriaById };