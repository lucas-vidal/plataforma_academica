import { getConnection, sql } from "../database/connection.js";
import querys from "../database/querys.js";

//Consulta la tabla de COURSES
export const getCourses = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getCourses)
        res.json(result.recordsets)
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Consulta un curso
export const getCourseByCode = async (req, res) => {
    const { code } = req.params;

    if (code == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("code", sql.Int, code)
            .query(querys.getCourseByCode);

        res.send(result.recordsets[0]);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Consulta un curso
export const getCourseByCareer = async (req, res) => {
    const { code } = req.params;

    if (code == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("career", sql.Int, code)
            .query(querys.getCourseByCareer);

        res.send(result.recordsets[0]);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}
//Crea nuevo Curso
export const addNewCourse = async (req, res) => {

    const { code, name, career, season, teacher, date_test1, date_test2, date_test3, date_test4, date_ap1, date_ap2, date_ap3, date_ap4 } = req.body

    if (code == null || name == null ) {

        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();

        await pool
            .request()
            .input("code", sql.Int, code)
            .input("name", sql.VarChar, name)
            .input("career", sql.Int, career)
            .input("season", sql.Int, season)
            .input("teacher", sql.Int, teacher)
            .input("date_test1", sql.DateTime, date_test1)
            .input("date_test2", sql.DateTime, date_test2)
            .input("date_test3", sql.DateTime, date_test3)
            .input("date_test4", sql.DateTime, date_test4)
            .input("date_ap1", sql.DateTime, date_ap1)
            .input("date_ap2", sql.DateTime, date_ap2)
            .input("date_ap3", sql.DateTime, date_ap3)
            .input("date_ap4", sql.DateTime, date_ap4)
            .query(querys.addNewCourse);
        res.json({ code, name, career, season, teacher, date_test1, date_test2, date_test3, date_test4, date_ap1, date_ap2, date_ap3, date_ap4 });

    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Elimina un curso
export const deleteCourseByCode = async (req, res) => {
    const { code } = req.params;

    if (code == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }

    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("code", sql.Int, code)
            .query(querys.deleteCourseByCode);

        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Actualiza un curso
export const updateCourseByCode = async (req, res) => {

    const { name, career, season, teacher, date_test1, date_test2, date_test3, date_test4, date_ap1, date_ap2, date_ap3, date_ap4 } = req.body;
    const { code } = req.params;

    if ( name == null || code == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
       
    try {
 const pool = await getConnection();
        await pool
            .request()
            .input("name", sql.VarChar, name)
            .input("career", sql.Int, career)
            .input("season", sql.Int, season)
            .input("teacher", sql.Int, teacher)
            .input("date_test1", sql.DateTime, date_test1)
            .input("date_test2", sql.DateTime, date_test2)
            .input("date_test3", sql.DateTime, date_test3)
            .input("date_test4", sql.DateTime, date_test4)
            .input("date_ap1", sql.DateTime, date_ap1)
            .input("date_ap2", sql.DateTime, date_ap2)
            .input("date_ap3", sql.DateTime, date_ap3)
            .input("date_ap4", sql.DateTime, date_ap4)
            .input("code", sql.Int, code)
            .query(querys.updateCourseByCode);
        res.json({ code, name, career, season, teacher, date_test1, date_test2, date_test3, date_test4, date_ap1, date_ap2, date_ap3, date_ap4 });
    } catch (error) {

        res.status(500);
        res.status(error.message);
    };
}

