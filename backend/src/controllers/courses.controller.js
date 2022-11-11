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
            .query(querys.getProductByCode);

        res.send(result.recordsets[0]);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Crea nuevo Curso
export const addNewCourse = async (req, res) => {

    const { code, name, dni_1, dni_2, dni_3 } = req.body

    if (code == null || name == null || dni_1 == null ) {

        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();

        await pool
            .request()
            .input("code", sql.Int, code)
            .input("name", sql.VarChar, name)
            .input("dni_1", sql.Int, dni_1)
            .input("dni_2", sql.Int, dni_2)
            .input("dni_3", sql.Int, dni_3)
            .query(querys.addNewCourse);
        res.json({ code, name, dni_1, dni_2, dni_3 });

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

    const { name, dni_1, dni_2, dni_3  } = req.body;
    const { code } = req.params;

    if ( name == null || dni_1 == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
       
    try {
 const pool = await getConnection();
        await pool
            .request()
            .input("name", sql.VarChar, name)
            .input("dni_1", sql.Int, dni_1)
            .input("dni_2", sql.Int, dni_2)
            .input("dni_3", sql.Int, dni_3)
            .input("code", sql.Int, code)
            .query(querys.updateCourseByCode);
        res.json({ code, name, dni_1, dni_2, dni_3  });
    } catch (error) {

        res.status(500);
        res.status(error.message);
    };
}

