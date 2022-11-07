import express from 'express'
import config from './config.js';
import cors from 'cors'

import alumnosRoutes from './routes/alumnos.routes.js';
import docentesRoutes from './routes/docentes.routes.js';
import calificacionesRoutes from './routes/calificaciones.routes.js';
import materiasRoutes from './routes/materias.routes.js';
import inscripciones_materiasRoutes from './routes/inscripciones_materias.routes.js';

const app = express()

app.use(cors())
//settings
app.set('port', config.port)
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(alumnosRoutes);
app.use(docentesRoutes);
app.use(calificacionesRoutes);
app.use(materiasRoutes);
app.use(inscripciones_materiasRoutes);

export default app