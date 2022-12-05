
import {Router} from 'express'
import { getCareers, getCareerByCode, addNewcareer, deleteCareerByCode, updateCareerByCode
        } from '../controllers/careers.controller.js'

        const router = Router()
        //Consulta cursos
        router.get('/careers', getCareers)
        //Consulta un curso
        router.get('/careers/:code', getCareerByCode)
        //Insertar un nuevo curso
        router.post('/careers', addNewcareer)
        //Borrar curso
        router.delete('/careers/:code', deleteCareerByCode)
        //Actualizar curso
        router.put('/careers/:code', updateCareerByCode)

        export default router

