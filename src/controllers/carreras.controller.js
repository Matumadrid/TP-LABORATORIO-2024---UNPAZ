const db = require('../../models');
const Carreras = db.Carreras;
const Materias = db.Materias;

const getAllcarreras = async (req, res) => {
    try {
        const carreras = await Carreras.findAll({});
        res.status(200).json(carreras);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getCarreraById = async (req, res) => {
    const id = req.params.id;
    try {
        const carreras = await Carreras.findOne({ where: { id: id } });
        if (!carreras) {
            res.status(404).json({ error: 'Carrera no encontrada' });
        } else {
            res.status(200).json(carreras);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createCarrera = async (req, res) => {
    try {
        const nuevaCarrera = await Carreras.create(req.body);
        res.status(201).json(nuevaCarrera);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createMateriaByCarreraId = async (req, res) => {
    try {
        const nuevaMateria = await Materias.create(req.body);
        res.status(201).json(nuevaMateria);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getAllMateriasByCarreraId = async (req, res) => {
    const id = req.params.id;
    try {
        const materias = await Materias.findAll({ where: { carreraId: id } });
        res.status(200).json(materias);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteCarrera = async (req, res) => {
    const id = req.params.id;
    try {
        const carrera = await Carreras.findOne({ where: { id: id } });
        await carrera.destroy();
        res.status(200).json({ message: 'Carrera eliminada con éxito' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { getAllcarreras, getCarreraById, createCarrera,createMateriaByCarreraId, getAllMateriasByCarreraId, deleteCarrera }
