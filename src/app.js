const express = require('express');
const db = require('../models')

const materiasRoute = require('./routes/materias.route')
const carrerasRoute = require('./routes/carreras.route')
const PORT = process.env.PORT ?? 3000;
const app = express();

app.use(express.json());
app.use(materiasRoute)
app.use(carrerasRoute)

app.listen(PORT, async () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    //await db.sequelize.sync({ force: true });
});
