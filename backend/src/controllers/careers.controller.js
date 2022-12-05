import { getConnection, sql } from "../database/connection.js";
import querys from "../database/querys.js";

//Consulta la tabla de CAREERS
export const getCareers = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getCareers)
        res.json(result.recordsets)
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Consulta un curso
export const getCareerByCode = async (req, res) => {
    const { code } = req.params;

    if (code == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("code", sql.Int, code)
            .query(querys.getCareerByCode);

        res.send(result.recordsets[0]);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Crea nuevo Curso
export const addNewcareer = async (req, res) => {

    const { code, name } = req.body

    if (code == null || name == null ) {

        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();

        await pool
            .request()
            .input("code", sql.Int, code)
            .input("name", sql.VarChar, name)
            .query(querys.addNewCareer);
        res.json({ code, name });

    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Elimina un curso
export const deleteCareerByCode = async (req, res) => {
    const { code } = req.params;

    if (code == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }

    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("code", sql.Int, code)
            .query(querys.deleteCareerByCode);

        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Actualiza un curso
export const updateCareerByCode = async (req, res) => {

    const { name } = req.body;
    const { code } = req.params;

    if ( name == null || code == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
       
    try {
 const pool = await getConnection();
        await pool
            .request()
            .input("name", sql.VarChar, name)
            .input("code", sql.Int, code)
            .query(querys.updateCareerByCode);
        res.json({ code, name });
    } catch (error) {

        res.status(500);
        res.status(error.message);
    };
}

