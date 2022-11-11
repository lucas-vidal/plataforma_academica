
import {Router} from 'express'
import { getQualifications, getQualificationByCourse, getQualificationByDniAndCourse, addNewQualification, deleteQualificationByDniAndCourse, updateQualificationByDniAndCourse
} from '../controllers/qualifications.controller.js'

        const router = Router()
        //Consulta calificaciones
        router.get('/qualifications', getQualifications)
        //Consulta calificaciones de una materia 
        router.get('/qualifications/:code', getQualificationByCourse)
        //Consulta una calificacion 
        router.get('/qualifications/:code/:dni', getQualificationByDniAndCourse)
        //Insertar un nueva calificacion
        router.post('/qualifications', addNewQualification)
        //Borrar calificacion
        router.delete('/qualifications/:code/:dni', deleteQualificationByDniAndCourse)
        //Actualizar calificacion 
        router.put('/qualifications/:code/:dni', updateQualificationByDniAndCourse)

        export default router
        
        