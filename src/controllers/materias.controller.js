const db = require('../../models');
const Materias = db.Materias;

const getAllmaterias = async (req, res) => {
    try {
        const materias = await Materias.findAll({});
        res.status(200).json(materias);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getMateriaById = async (req, res) => {
    const id = req.params.id;
    try {
        const materia = await Materias.findOne({ where: { id: id } });
        res.status(200).json(materia);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createMateria = async (req, res) => {
    try {
        const nuevaMateria = await Materias.create(req.body);
        res.status(201).json(nuevaMateria);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteMateria = async (req, res) => {
    const id = req.params.id;
    try {
        const materia = await Materias.findOne({ where: { id: id } });
        await materia.destroy();
        res.status(200).json({ message: 'Materia eliminada con éxito' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { getAllmaterias, getMateriaById, createMateria, deleteMateria };
