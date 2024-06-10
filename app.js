const express = require('express');

const materiasRoute = require('./routes/materias.route')
const carrerasRoute = require('./routes/carreras.route')
const PORT = process.env.PORT ?? 3000;
const app = express();

app.use(express.json());
app.use(materiasRoute)
app.use(carrerasRoute)



/*app.get('/materias', async (req, res) => {
    try {
        const materias = await db.Materias.findAll({});
        res.status(200).json(materias);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/materias', async (req, res) => {
    try {
        const nuevaMateria = await db.Materias.create(req.body);
        res.status(201).json(nuevaMateria);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});*/

app.listen(PORT, async () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    //await db.sequelize.sync({ force: true });
});
