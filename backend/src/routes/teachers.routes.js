
import {Router} from 'express'
import { getTeachers, getTeacherByDni, addNewTeacher, deleteTeacherByDni, updateTeacherByDni
} from '../controllers/id_sales.controller.js'

        const router = Router()
        //Consulta docentes
        router.get('/teachers', getTeachers)
        //Consulta un docente
        router.get('/teachers/:dni', getTeacherByDni)
        //Insertar un nuevo docente
        router.post('/teachers', addNewTeacher)
        //Borrar un docente
        router.delete('/teachers/:dni', deleteTeacherByDni)
        //Actualizar un docente
        router.put('/teachers/:dni', updateTeacherByDni)

        export default router
        
        