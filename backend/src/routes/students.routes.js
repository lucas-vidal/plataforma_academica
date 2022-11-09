
import {Router} from 'express'
import { getStudents, getStudentsByDni, addNewStudents, deleteStudentsByDni, updateStudentsByDni
        } from '../controllers/students.controller'

        const router = Router()
        //Consulta alumnos
        router.get('/students', getStudents)
        //Consulta un alumno
        router.get('/students/:dni', getStudentsByDni)
        //Insertar un nuevo alumno
        router.post('/students', addNewStudents)
        //Borrar un alumno
        router.delete('/students/:dni', deleteStudentsByDni)
        //Actualizar un alumno
        router.put('/students/:dni', updateStudentsByDni)

        export default router