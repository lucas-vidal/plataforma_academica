import { getConnection, sql } from "../database/connection.js";
import querys from "../database/querys.js";

//Consulta la tabla de calificaciones
export const getQualifications = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getQualifications)
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

    const { code, dni, qual_1, qual_2, qual_3, qual_4, ap1, ap2, ap3, ap4 } = req.body

    if (code == null || dni == null ) {

        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();

        await pool
            .request()
            .input("code", sql.Int, code)
            .input("dni", sql.Int, dni)
            .input("qual_1", sql.Int, qual_1)
            .input("qual_2", sql.Int, qual_2)
            .input("qual_3", sql.Int, qual_3)
            .input("qual_4", sql.Int, qual_4)
            .input("ap1", sql.Int, ap1)
            .input("ap2", sql.Int, ap2)
            .input("ap3", sql.Int, ap3)
            .input("ap4", sql.Int, ap4)
            .query(querys.addNewQualification);
        res.json({ code, dni, qual_1, qual_2, qual_3, qual_4, ap1, ap2, ap3, ap4 });

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

    const { qual_1, qual_2, qual_3, qual_4, ap1, ap2, ap3, ap4  } = req.body;
    const { code , dni } = req.params;

    if ( code == null || dni == null ) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
       
    try {
 const pool = await getConnection();
        await pool
            .request()
            .input("qual_1", sql.Int, qual_1)
            .input("qual_2", sql.Int, qual_2)
            .input("qual_3", sql.Int, qual_3)
            .input("qual_4", sql.Int, qual_4)
            .input("ap1", sql.Int, ap1)
            .input("ap2", sql.Int, ap2)
            .input("ap3", sql.Int, ap3)
            .input("ap4", sql.Int, ap4)
            .input("code", sql.Int, code)
            .input("dni", sql.Int, dni)
            .query(querys.updateQualificationByDniAndCourse);
        res.json({  code, dni, qual_1, qual_2, qual_3, qual_4, ap1, ap2, ap3, ap4 });
    } catch (error) {

        res.status(500);
        res.status(error.message);
    };
}