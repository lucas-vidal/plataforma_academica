
import {Router} from 'express'
import { getNotifications, getNotificationsByToDni, getNotificationsByFromDni, getNotificationById, addNewNotification, deleteNotificationById, updateNotificationById
} from '../controllers/notifications.controller.js'

        const router = Router()
        //Consulta notificaciones
        router.get('/notifications', getNotifications)
        //Consulta notificaciones de salida
        router.get('/notifications/:from_dni', getNotificationsByToDni)
        //Consulta notificaciones de destino
        router.get('/notifications/:to_dni', getNotificationsByFromDni)
        //Consulta una notificacion
        router.get('/notifications/:id', getNotificationById)
        //Insertar una nueva notificacion
        router.post('/notifications', addNewNotification)
        //Borrar una notificacion
        router.delete('/notifications/:id', deleteNotificationById)
        //Actualizar una notificacion
        router.put('/notifications/:id', updateNotificationById)

        export default router
        
        