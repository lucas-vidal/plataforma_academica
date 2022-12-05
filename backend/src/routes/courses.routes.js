
import {Router} from 'express'
import { getCourses, getCourseByCode, getCourseByCareer, addNewCourse, deleteCourseByCode, updateCourseByCode
        } from '../controllers/courses.controller.js'

        const router = Router()
        //Consulta cursos
        router.get('/courses', getCourses)
        //Consulta un curso
        router.get('/courses/code/:code', getCourseByCode)
        //Consulta un curso
        router.get('/courses/career/:code', getCourseByCareer)
        //Insertar un nuevo curso
        router.post('/courses', addNewCourse)
        //Borrar curso
        router.delete('/courses/:code', deleteCourseByCode)
        //Actualizar curso
        router.put('/courses/:code', updateCourseByCode)

        export default router

