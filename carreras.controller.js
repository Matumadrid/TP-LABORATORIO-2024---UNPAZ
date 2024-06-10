const db = require('../../models');
const carreras = db.Carreras

const getAllcarreras = (req, res) => {
    res.status(200).json(carreras)
}

const getCarreraById = (req, res) => {
    const id = req.params.id
    const carrera = carreras.find( s=> s.id == id)
    res.status(200).json(carrera)
}

const createCarrera = (req, res) => {
    const carrera = req.body
    let id = 1
    if(carreras.length) {
        const ids = carreras.map ( s => s.id )
        id = Math.max(...ids) + 1
    }
    carreras.push( {id, ...carrera})
    res.status(201).json(carreras[carreras.length-1])
}


module.exports = { getAllcarreras, getCarreraById, createCarrera, carreras  }
