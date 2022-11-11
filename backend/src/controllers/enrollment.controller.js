import { getConnection, sql } from "../database/connection.js";
import querys from "../database/querys.js";

//Consulta la tabla de Proveedores
export const getEnrollments = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .query(querys.getEnrollments)
        res.json(result.recordsets)
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}



//Consulta una inscripcion por codigo
export const getEnrollmentByCode = async (req, res) => {
    const { code } = req.params;

    if (code == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("cpde", sql.Int, code)
            .query(querys.getEnrollmentByCode);

        res.send(result.recordsets[0]);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Consulta una inscripcion por dni
export const getEnrollmentByDni = async (req, res) => {
    const { dni } = req.params;

    if (id == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("dni", sql.Int, dni)
            .query(querys.getEnrollmentByDni);

        res.send(result.recordsets[0]);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Crea nuevo inscripcion
export const addNewEnrollment = async (req, res) => {

    const { code, dni } = req.body

    if (code == null || dni == null ) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();

        await pool
            .request()
            .input("code", sql.VarChar, supplier)
            .input("dni", sql.VarChar, address)
            .query(querys.addNewEnrollment);
        res.json({ code, dni });
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Elimina una inscripcion
export const deleteEnrollmentByDni = async (req, res) => {
    const { code, dni } = req.params;


    if (code == null || dni == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("code", sql.Int, code)
            .input("dni", sql.Int, dni)
            .query(querys.deleteEnrollmentByDni);

        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}



//Actualiza una inscripcion
export const updateEnrollmentByDni = async (req, res) => {

    const { code } = req.body;
    const { dni } = req.params;

    if ( code == null || dni == null ) {

        return res.status(400).json({ msg: "Complete todos los campos." })
        
    }
            const pool = await getConnection();
            await pool
            .request()
            .input("code", sql.Int, code)
            .input("dni", sql.Int, dni)
            .query(querys.updateEnrollmentByDni);
        res.json({ code, dni });
    try {

    } catch (error) {
        
        res.status(500);
        res.status(error.message);
    };
}