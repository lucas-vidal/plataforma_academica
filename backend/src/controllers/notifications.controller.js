import { getConnection, sql } from "../database/connection.js";
import querys from "../database/querys.js";

//Consulta la tabla de Docentes
export const getNotifications = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getNotifications)
        res.json(result.recordsets)
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Consulta una notificacion de destino por dni
export const getNotificationsByToDni = async (req, res) => {
    const { dni } = req.params;

    if (dni == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("dni", sql.Int, dni)
            .query(querys.getNotificationsByToDni);

        res.send(result.recordsets[0]);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Consulta una notificacion de salida por dni
export const getNotificationsByFromDni = async (req, res) => {
    const { dni } = req.params;

    if (dni == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("dni", sql.Int, dni)
            .query(querys.getNotificationsByFromDni);

        res.send(result.recordsets[0]);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Consulta una notificacion de salida por dni
export const getNotificationById = async (req, res) => {
    const { id } = req.params;

    if (id == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("id", sql.Int, id)
            .query(querys.getNotificationById);

        res.send(result.recordsets[0]);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Crea una notificacion
export const addNewNotification = async (req, res) => {

    const { datatime, subject, from_dni, to_dni, message } = req.body

    try {
        const pool = await getConnection();

        await pool
        .request()
        .input("datatime", sql.Int, datatime)
        .input("subject", sql.VarChar, subject)
        .input("from_dni", sql.VarChar, from_dni)
        .input("to_dni", sql.Date, to_dni)
        .input("message", sql.VarChar, message)
        .query(querys.addNewNotification);
    res.json({ datatime, subject, from_dni, to_dni, message });
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}


//Elimina una notificacion
export const deleteNotificationById = async (req, res) => {
    const { id } = req.params;

    if (id == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }

    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("id", sql.Int, id)
            .query(querys.deleteNotificationById);

        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Actualiza una notificacion
export const updateNotificationById = async (req, res) => {

    const { datatime, subject, from_dni, to_dni, message } = req.body;
    const { id } = req.params;

    if (name == null || surname == null || date_of_brith == null || username == null || password == null ) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
 const pool = await getConnection();
        await pool
        .request()
        .input("datatime", sql.Int, datatime)
        .input("subject", sql.VarChar, subject)
        .input("from_dni", sql.VarChar, from_dni)
        .input("to_dni", sql.Date, to_dni)
        .input("message", sql.VarChar, message)
        .input("id", sql.Int, id)
        .query(querys.updateNotificationById);
        res.json({ datatime, subject, from_dni, to_dni, message });
    } catch (error) {

        res.status(500);
        res.status(error.message);
    };
}