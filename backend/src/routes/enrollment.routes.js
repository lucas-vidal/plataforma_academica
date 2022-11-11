
import {Router} from 'express'
import { getEnrollments, getEnrollmentByDni, getEnrollmentByCode , addNewEnrollment, deleteEnrollmentByDni, updateEnrollmentByDni
        } from '../controllers/enrollment.controller.js'

        const router = Router()
        //Consulta inscripciones
        router.get('/enrollments', getEnrollments)
        //Consulta las inscripciones de un alumno
        router.get('/enrollments/:dni', getEnrollmentByDni)
        //Consulta las inscripciones de una materia
        router.get('/enrollments/:code', getEnrollmentByCode)
        //Insertar una nueva inscripcion
        router.post('/enrollments', addNewEnrollment)
        //Borrar una inscripcion
        router.delete('/enrollments/:dni', deleteEnrollmentByDni)
        //Actualizar una inscripcion
        router.put('/enrollments/:dni', updateEnrollmentByDni)

        export default router