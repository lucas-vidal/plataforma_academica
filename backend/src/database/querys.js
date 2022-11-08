export default{

    //Alumnos
    getAllAlumnos : 'SELECT * FROM alumnos',
    addNewAlumno : 'INSERT INTO alumnos (nombre, apellido, fecha_nacimiento, fecha_ingreso, usuario, contraseña) VALUES (@nombre, @apellido, @fecha_nacimiento, @fecha_ingreso, @usuario, @contraseña)',
    getAlumnoByDni : 'SELECT * FROM alumnos WHERE dni = @dni',
    deleteAlumnoByDni : 'DELETE FROM alumnos WHERE dni = @dni',
    getTotalAlumnos : 'SELECT COUNT (*) FROM alumnos',
    updateAlumnosByDni : 'UPDATE alumnos SET nombre = @nombre, apellido = @apellido, fecha_nacimiento = @fecha_nacimiento, fecha_ingreso = @fecha_ingreso, usuario = @usuario, contraseña = @contraseña WHERE dni = @dni',

    //Docentes
    getAllDocentes : 'SELECT * FROM docentes',
    addNewDocente : 'INSERT INTO docentes (nombre, apellido, fecha_nacimiento, usuario, contraseña) VALUES (@nombre, @apellido, @fecha_nacimiento, @fecha_ingreso, @usuario, @contraseña)',
    getDocenteByDni : 'SELECT * FROM docentes WHERE dni = @dni',
    deleteDocenteByDni : 'DELETE FROM docentes WHERE dni = @dni',
    getTotalDocentes : 'SELECT COUNT (*) FROM docentes',
    updateDocentesByDni : 'UPDATE docentes SET nombre = @nombre, apellido = @apellido, fecha_nacimiento = @fecha_nacimiento, usuario = @usuario, contraseña = @contraseña WHERE dni = @dni',

    //Calificaciones
    getAllCalificaciones : 'SELECT * FROM calificaciones',
    addNewCalificacion : 'INSERT INTO calificaciones (codigo_materia, dni_alumno, nota_1, fecha_1, nota_2, fecha_2, nota_3, fecha_3) VALUES (@supplier, @address, @city, @phone)',
    getCalificacionById : 'SELECT * FROM calificaciones WHERE codigo_materia = @codigo_materia and dni_alumno = @dni_alumno',
    deleteCalificacionById : 'DELETE FROM calificaciones WHERE id = @id',
    updateCalificacionById : 'UPDATE calificaciones SET supplier = @supplier, address = @address, city = @city, phone = @phone WHERE id = @id',
    
    //Materias
    getSales : 'SELECT * FROM sales ORDER BY id_sale DESC',
    getProductsByIdSaleOfTheSale : 'SELECT * FROM sales WHERE id_sale = @id_sale',
    getProductByCodeOfTheSale : 'SELECT * FROM sales WHERE id_sale = @id_sale and code = @code',
    countTotalItemsOfTheSale : 'SELECT COUNT (*) FROM sales WHERE id_sale = @id_sale',
    insertAProductToSale : 'DECLARE @id_sale INT; SET @id_sale = (SELECT TOP 1 id_sale FROM id_sales ORDER BY id_sale DESC); INSERT INTO sales (id_sale, code, price, quantity) VALUES (@id_sale, @code, @price, @quantity)',
    deleteProductByCodeOfTheSale : 'DELETE FROM sales WHERE code = @code and id_sale = @id_sale',
    deleteAllProductOfTheSale : 'DELETE FROM sales WHERE id_sale = @id_sale',
    updateProductsByCodeOfTheSale : 'UPDATE sales SET  price = @price, quantity = @quantity WHERE id_sale = @id_sale',

    //Inscripcion a materias
    getIdSales : 'SELECT * FROM id_sales ORDER BY data_time DESC',
    getIdSalesById : 'SELECT * FROM id_sales WHERE id_sale = @id_sale',
    addNewSale :'INSERT INTO id_sales ( dni_customer) VALUES ( @dni_customer);',
    deleteIdSaleById : 'DELETE FROM id_sales WHERE id_sale = @id_sale',
    updateIdSalebyId : 'UPDATE id_sales SET data_time = CURRENT_TIMESTAMP, dni_customer = @dni_customer WHERE id_sale = @id_sale',
    getIdLastSale : 'DECLARE @id_sale INT; SET @id_sale = (SELECT TOP 1 id_sale FROM id_sales ORDER BY id_sale DESC); SELECT @id_sale',

}