import { getConnection, sql } from "../database/connection.js";
import querys from "../database/querys.js";

//Consulta la tabla de Docentes
export const getTeachers = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getTeachers)
        res.json(result.recordsets)
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Consulta un docente por dni
export const getTeacherByDni = async (req, res) => {
    const { dni } = req.params;

    if (dni == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("dni", sql.Int, dni)
            .query(querys.getTeacherByDni);

        res.send(result.recordsets[0]);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Contar cantidad alumnos
export const countTotalTeachers = async (req, res) => {
    const { dni } = req.params;
    try {
    const pool = await getConnection();
    const result = await pool
        .request()
        .input("dni", sql.Int, dni)
        .query(querys.countTotalTeachers);
    res.json(result.recordsets);

    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}


//Crea un nuevo docente
export const addNewTeacher = async (req, res) => {

    const { dni, name, surname, date_of_brith, username, password } = req.body

    try {
        const pool = await getConnection();

        await pool
        .request()
        .input("dni", sql.Int, dni)
        .input("name", sql.VarChar, name)
        .input("surname", sql.VarChar, surname)
        .input("date_of_brith", sql.Date, date_of_brith)
        .input("username", sql.VarChar, username)
        .input("password", sql.VarChar, password)
        .query(querys.addNewStudent);
    res.json({ dni, name, surname, date_of_brith, username, password });
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}


//Elimina una venta por ID
export const deleteTeacherByDni = async (req, res) => {
    const { dni } = req.params;

    if (dni == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }

    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("dni", sql.Int, dni)
            .query(querys.deleteTeacherByDni);

        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Actualiza un producto en la lista de venta
export const updateTeacherByDni = async (req, res) => {

    const { name, surname, date_of_brith, username, password } = req.body;
    const { dni } = req.params;

    if (name == null || surname == null || date_of_brith == null || username == null || password == null ) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
 const pool = await getConnection();
        await pool
        .request()
        .input("name", sql.VarChar, name)
        .input("surname", sql.VarChar, surname)
        .input("date_of_brith", sql.Date, date_of_brith)
        .input("username", sql.VarChar, username)
        .input("password", sql.VarChar, password)
        .input("dni", sql.Int, dni)
        .query(querys.updateTeacherByDni);
        res.json({ dni, name, surname, date_of_brith, username, password });
    } catch (error) {

        res.status(500);
        res.status(error.message);
    };
}