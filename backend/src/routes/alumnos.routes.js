
import {Router} from 'express'
import { getAlumno, getAlumnoByDni, createNewAlumno, deleteAlumnoByDni, updateAlumnoByDni
        } from '../controllers/alumnos.controller'

const router = Router()
//Consulta alumnos
router.get('/alumnos', getAlumno)
//Consulta un alumno
router.get('/alumnos/:dni', getAlumnoByDni)
//Insertar un alumno
router.post('/alumnos', createNewAlumno)
//Borrar un alumno
router.delete('/alumnos/:dni', deleteAlumnoByDni)
//Actualizar datos de alumno
router.put('/alumnos/:dni', updateAlumnoByDni)

export default router