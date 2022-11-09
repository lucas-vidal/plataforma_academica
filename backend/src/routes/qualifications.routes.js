
import {Router} from 'express'
import { getQualifications, getQualificationsByCourse, getQualificationsByDniAndCourse, addNewQualification, deleteQualificationsByDniAndCourse, updateQualificationsByDniAndCourse
} from '../controllers/qualifications.controller'

        const router = Router()
        //Consulta calificaciones
        router.get('/qualifications', getQualifications)
        //Consulta calificaciones de una materia 
        router.get('/qualifications/:code_course', getQualificationsByCourse)
        //Consulta una calificacion 
        router.get('/qualifications/:code_course/:dni', getQualificationsByDniAndCourse)
        //Insertar un nueva calificacion
        router.post('/qualifications', addNewQualification)
        //Borrar calificacion
        router.delete('/qualifications/:code_course/:dni', deleteQualificationsByDniAndCourse)
        //Actualizar calificacion 
        router.put('/qualifications/:code_course/:dni', updateQualificationsByDniAndCourse)

        export default router
        
        