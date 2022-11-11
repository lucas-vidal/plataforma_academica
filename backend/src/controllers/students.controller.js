import { getConnection, sql } from "../database/connection.js";
import querys from "../database/querys.js";

//Consulta la tabla de Alumnos
export const getStudents = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .query(querys.getStudents)
        res.json(result.recordsets)
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Consulta un Alumno por dni
export const getStudentByDni = async (req, res) => {
    const { dni } = req.params;

    if (dni == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("dni", sql.Int, dni)
            .query(querys.getStudentByDni);

        res.send(result.recordsets[0]);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Contar cantidad alumnos
export const countTotalStudents = async (req, res) => {
    const { dni } = req.params;
    try {
    const pool = await getConnection();
    const result = await pool
        .request()
        .input("dni", sql.Int, dni)
        .query(querys.countTotalStudents);
    res.json(result.recordsets);

    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Crea nuevo Alumno
export const addNewStudent = async (req, res) => {

    const { dni, name, surname, date_of_brith, date_of_admission, username, password } = req.body

    if (dni == null || name == null || surname == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();

        await pool
            .request()
            .input("dni", sql.Int, dni)
            .input("name", sql.VarChar, name)
            .input("surname", sql.VarChar, surname)
            .input("date_of_brith", sql.Date, date_of_brith)
            .input("date_of_admission", sql.Date, date_of_admission)
            .input("username", sql.VarChar, username)
            .input("password", sql.VarChar, password)
            .query(querys.addNewStudent);
        res.json({ dni, name, surname, date_of_brith, date_of_admission, username, password });
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Elimina un alumno por dni
export const deleteStudentByDni = async (req, res) => {
    const { dni } = req.params;


    if (dni == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("dni", sql.Int, dni)
            .query(querys.deleteStudentByDni);

        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Actualiza un alumno
export const updateStudentByDni = async (req, res) => {

    const { name, surname, date_of_brith, date_of_admission, username, password } = req.body;
    const { dni } = req.params;

    if (name == null || surname == null ) {

        return res.status(400).json({ msg: "Complete todos los campos." })
        
    }
            const pool = await getConnection();

            await pool
            .request()
            .input("name", sql.VarChar, name)
            .input("surname", sql.VarChar, surname)
            .input("date_of_brith", sql.Date, date_of_brith)
            .input("date_of_admission", sql.Date, date_of_admission)
            .input("username", sql.VarChar, username)
            .input("password", sql.VarChar, password)
            .input("dni", sql.Int, dni)
            .query(querys.updateStudentByDni);
        res.json({ name, surname, date_of_brith, date_of_admission, username, password });
    try {


    } catch (error) {
        
        res.status(500);
        res.status(error.message);
    };
}