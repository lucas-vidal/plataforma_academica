import { getConnection, sql } from "../database/connection.js";
import querys from "../database/querys.js";

//Consulta la tabla de Alumnos
export const getUsers = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .query(querys.getUsers)
        res.json(result.recordsets)
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Consulta un Alumno por dni
export const getUserByDni = async (req, res) => {
    const { dni } = req.params;

    if (dni == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("dni", sql.Int, dni)
            .query(querys.getUserByDni);

        res.send(result.recordsets[0]);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Consulta un Alumno por dni
export const getUserByCareer = async (req, res) => {
    const { career } = req.params;

    if (career == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("career", sql.Int, career)
            .query(querys.getUserByCareer);

        res.send(result.recordsets[0]);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Contar cantidad alumnos
export const countTotalUsersStudents = async (req, res) => {
    const { dni } = req.params;
    try {
    const pool = await getConnection();
    const result = await pool
        .request()
        .input("dni", sql.Int, dni)
        .query(querys.countTotalUsersStudents);
    res.json(result.recordsets);

    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Contar cantidad docentes
export const countTotalUsersTeachers = async (req, res) => {
    const { dni } = req.params;
    try {
    const pool = await getConnection();
    const result = await pool
        .request()
        .input("dni", sql.Int, dni)
        .query(querys.countTotalUsersTeachers);
    res.json(result.recordsets);

    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Crea nuevo usuario
export const addNewUser = async (req, res) => {

    const { dni, name, surname, date_of_brith, date_of_admission, career, password, teacher, admin } = req.body

    if (dni == null || name == null || surname == null || date_of_brith == null) {
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
            .input("career", sql.Int, career)
            .input("password", sql.VarChar, password)
            .input("teacher", sql.Bit, teacher)
            .input("admin", sql.Bit, admin)
            .query(querys.addNewUser);
        res.json({ dni, name, surname, date_of_brith, date_of_admission, career, password, teacher, admin });
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Elimina un alumno por dni
export const deleteUserByDni = async (req, res) => {
    const { dni } = req.params;


    if (dni == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("dni", sql.Int, dni)
            .query(querys.deleteUserByDni);

        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Actualiza un alumno
export const updateUserByDni = async (req, res) => {

    const { name, surname, date_of_brith, date_of_admission, career, password, teacher, admin } = req.body;
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
            .input("career", sql.Int, career)
            .input("password", sql.VarChar, password)
            .input("teacher", sql.Binary, teacher)
            .input("admin", sql.Binary, admin)
            .input("dni", sql.Int, dni)
            .query(querys.updateUserByDni);
        res.json({ name, surname, date_of_brith, date_of_admission, career, password, teacher, admin });
    try {


    } catch (error) {
        
        res.status(500);
        res.status(error.message);
    };
}