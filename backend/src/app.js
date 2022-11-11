import express from 'express'
import config from './config.js';
import cors from 'cors'

import studentsRoutes from './routes/students.routes.js';
import teachersRoutes from './routes/teachers.routes.js';
import coursesRoutes from './routes/courses.routes.js';
import qualificactionsRoutes from './routes/qualifications.routes.js';
import enollmentRoutes from './routes/enrollment.routes.js';

const app = express()

app.use(cors())
//settings
app.set('port', config.port)
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(studentsRoutes);
app.use(teachersRoutes);
app.use(coursesRoutes);
app.use(qualificactionsRoutes);
app.use(enollmentRoutes);

export default app