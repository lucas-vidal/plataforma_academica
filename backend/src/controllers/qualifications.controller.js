import { getConnection, sql } from "../database/connection.js";
import querys from "../database/querys.js";

//Consulta la tabla de calificaciones
export const getQualifications = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getSales)
        res.json(result.recordsets)
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Consulta de calificaciones de un curso
export const getQualificationByCourse = async (req, res) => {
    const { code } = req.params;

    if (code == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("code", sql.Int, code)
            .query(querys.getQualificationByCourse);

        res.send(result.recordsets[0]);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Consulta una calificacion por curso y dni
export const getQualificationByDniAndCourse = async (req, res) => {
    const { code, dni } = req.params;

    if (code == null || dni == null ) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("code", sql.Int, code)
            .input("dni", sql.Int, dni)
            .query(querys.getQualificationByDniAndCourse);

        res.send(result.recordsets[0][0]);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Inserta un calificacion
export const addNewQualification = async (req, res) => {

    const { code, dni, qual_1, date_1, qual_2, date_2, qual_3, date_3 } = req.body

    if (code == null || price == null || quantity == null ) {

        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();

        await pool
            .request()
            .input("code", sql.Int, code)
            .input("dni", sql.Int, dni)
            .input("qual_1", sql.Int, qual_1)
            .input("date_1", sql.Date, date_1)
            .input("qual_2", sql.Int, qual_2)
            .input("date_2", sql.Date, date_2)
            .input("qual_3", sql.Int, qual_3)
            .input("date_3", sql.Date, date_3)
            .query(querys.addNewQualification);
        res.json({ code, dni, qual_1, date_1, qual_2, date_2, qual_3, date_3 });

    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Elimina una calificacion
export const deleteQualificationByDniAndCourse = async (req, res) => {
    const {code, dni } = req.params;

    if ( code == null || dni == null ) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }

    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("code", sql.Int, code)
            .input("dni", sql.Int, dni)
            .query(querys.deleteQualificationByDniAndCourse);

        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Actualiza un calificacion
export const updateQualificationByDniAndCourse = async (req, res) => {

    const { qual_1, date_1, qual_2, date_2, qual_3, date_3 } = req.body;
    const { code , dni } = req.params;

    if ( code == null || dni == null ) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
       
    try {
 const pool = await getConnection();
        await pool
            .request()
            .input("qual_1", sql.Int, qual_1)
            .input("date_1", sql.Date, date_1)
            .input("qual_2", sql.Int, qual_2)
            .input("date_2", sql.Date, date_2)
            .input("qual_3", sql.Int, qual_3)
            .input("date_3", sql.Date, date_3)
            .input("code", sql.Int, code)
            .input("dni", sql.Int, dni)
            .query(querys.updateQualificationByDniAndCourse);
        res.json({ code, dni, qual_1, date_1, qual_2, date_2, qual_3, date_3 });
    } catch (error) {

        res.status(500);
        res.status(error.message);
    };
}