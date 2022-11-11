
import {Router} from 'express'
import { getStudents, getStudentByDni, addNewStudent, countTotalStudents, deleteStudentByDni, updateStudentByDni
        } from '../controllers/students.controller.js'

        const router = Router()
        //Consulta alumnos
        router.get('/students', getStudents)
        //Consulta un alumno
        router.get('/students/:dni', getStudentByDni)
        //Contar total de alumnos
        router.post('/students/count', countTotalStudents)
        //Insertar un nuevo alumno
        router.post('/students', addNewStudent)
        //Borrar un alumno
        router.delete('/students/:dni', deleteStudentByDni)
        //Actualizar un alumno
        router.put('/students/:dni', updateStudentByDni)

        export default router