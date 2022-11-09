export default{

    //Alumnos
    getStudents : 'SELECT * FROM students',
    getStudentsByDni : 'INSERT INTO students (name, surname, date_of_brith, date_of_admission, user, password) VALUES (@name, @surname, @date_of_brith, @date_of_admission, @user, @password)',
    addNewStudents : 'SELECT * FROM students WHERE dni = @dni',
    deleteStudentsByDni : 'DELETE FROM students WHERE dni = @dni',
    getTotalStudents : 'SELECT COUNT (*) FROM students',
    updateStudentsByDni : 'UPDATE students SET name = @name, surname = @surname, date_of_brith = @date_of_brith, date_of_admission = @date_of_admission, user = @user, password = @password WHERE dni = @dni',

    //Docentes
    getAllTeachers : 'SELECT * FROM teachers',
    addNewTeacher : 'INSERT INTO teachers (name, surname, date_of_brith, user, password) VALUES (@name, @surname, @date_of_brith, @date_of_admission, @user, @password)',
    getTeacherByDni : 'SELECT * FROM teachers WHERE dni = @dni',
    deleteTeacherByDni : 'DELETE FROM teachers WHERE dni = @dni',
    getTotalTeachers : 'SELECT COUNT (*) FROM teachers',
    updateTeachersByDni : 'UPDATE teachers SET name = @name, surname = @surname, date_of_brith = @date_of_brith, user = @user, password = @password WHERE dni = @dni',

    //Calificaciones
    getAllQualification : 'SELECT * FROM qualification',
    addNewQualification : 'INSERT INTO qualification (code_course, dni_student, qual_1, date_1, qual_2, date_2, qual_3, date_3) VALUES (@code_course, @dni_student, @qual_1, @date_1, @qual_2, @date_2, @qual_3, @date_3)',
    getQualificationById : 'SELECT * FROM qualification WHERE code_course = @code_course and dni_student = @dni_student',
    deleteQualificationById : 'DELETE FROM qualification WHERE code_course = @code_course and dni_student = @dni_student',
    updateQualificationById : 'UPDATE qualification SET code_course = @code_course, dni_student = @dni_student, city = @city, phone = @phone WHERE id = @id',
    
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