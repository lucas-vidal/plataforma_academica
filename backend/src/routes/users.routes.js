
import {Router} from 'express'
import { getUsers, getUserByDni, getUserByCareer, countTotalUsersStudents, countTotalUsersTeachers, addNewUser, deleteUserByDni, updateUserByDni
        } from '../controllers/users.controller.js'

        const router = Router()
        //Consulta alumnos
        router.get('/users', getUsers)
        //Consulta un alumno
        router.get('/users/dni/:dni', getUserByDni)
        //Consulta un alumno
        router.get('/users/:career', getUserByCareer)
        //Contar total de alumnos
        router.post('/users/count_students', countTotalUsersStudents)
        //Contar total de docentes
        router.post('/users/count_teachers', countTotalUsersTeachers)
        //Insertar un nuevo usuario
        router.post('/users', addNewUser)
        //Borrar un usuario
        router.delete('/users/:dni', deleteUserByDni)
        //Actualizar un usuario
        router.put('/users/:dni', updateUserByDni)

        export default router