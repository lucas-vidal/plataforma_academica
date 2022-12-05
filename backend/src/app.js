import express from 'express'
import config from './config.js';
import cors from 'cors'

import usersRoutes from './routes/users.routes.js';
import notificationsRoutes from './routes/notifications.routes.js';
import coursesRoutes from './routes/courses.routes.js';
import qualificactionsRoutes from './routes/qualifications.routes.js';
import enollmentRoutes from './routes/enrollment.routes.js';
import careersRoutes from './routes/careers.routes.js';


const app = express()

app.use(cors())
//settings
app.set('port', config.port)
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(usersRoutes);
app.use(notificationsRoutes);
app.use(coursesRoutes);
app.use(qualificactionsRoutes);
app.use(enollmentRoutes);
app.use(careersRoutes);

export default app