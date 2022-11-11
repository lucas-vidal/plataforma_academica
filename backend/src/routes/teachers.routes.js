
import {Router} from 'express'
import { getTeachers, getTeacherByDni, countTotalTeachers, addNewTeacher, deleteTeacherByDni, updateTeacherByDni
} from '../controllers/teachers.controller.js'

        const router = Router()
        //Consulta docentes
        router.get('/teachers', getTeachers)
        //Consulta un docente
        router.get('/teachers/:dni', getTeacherByDni)
        //Contar total de docentes
        router.post('/teachers/count', countTotalTeachers)
        //Insertar un nuevo docente
        router.post('/teachers', addNewTeacher)
        //Borrar un docente
        router.delete('/teachers/:dni', deleteTeacherByDni)
        //Actualizar un docente
        router.put('/teachers/:dni', updateTeacherByDni)

        export default router
        
        