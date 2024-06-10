const db = require('../../models');
const materias = db.Materias


const getAllmaterias = (req, res) => {
    res.status(200).json(materias)
}

const getMateriaById = (req, res) => {
    const id = req.params.id
    const materia = materias.find( s=> s.id == id)
    res.status(200).json(materia)
}

const createMateria = (req, res) => {
    const materia = req.body
    let id = 1
    if(materias.length) {
        const ids = materias.map ( s => s.id )
        id = Math.max(...ids) + 1
    }
    materias.push( {id, ...materia})
    res.status(201).json(materias[materias.length-1])
}


module.exports = { getAllmaterias, getMateriaById, createMateria, materias  }
