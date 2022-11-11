export default{

    //Alumnos
    getStudents : 'SELECT * FROM students ORDER BY name DESC',
    getStudentByDni : 'SELECT * FROM students WHERE dni = @dni',
    countTotalStudents : 'SELECT COUNT (*) FROM students',
    addNewStudent : 'INSERT INTO students (dni, name, surname, date_of_brith, date_of_admission, username, password) VALUES (@dni, @name, @surname, @date_of_brith, @date_of_admission, @username, @password)',
    deleteStudentByDni : 'DELETE FROM students WHERE dni = @dni',
    updateStudentByDni : 'UPDATE students SET name = @name, surname = @surname, date_of_brith = @date_of_brith, date_of_admission = @date_of_admission, username = @username, password = @password WHERE dni = @dni',

    //Docentes
    getTeachers : 'SELECT * FROM teachers ORDER BY name DESC',
    getTeacherByDni : 'SELECT * FROM teachers WHERE dni = @dni',
    countTotalTeachers : 'SELECT COUNT (*) FROM teachers',
    addNewTeacher : 'INSERT INTO teachers (dni, name, surname, date_of_brith, username, password) VALUES (@dni, @name, @surname, @date_of_brith, @username, @password)',
    deleteTeacherByDni : 'DELETE FROM teachers WHERE dni = @dni',
    updateTeacherByDni : 'UPDATE teachers SET name = @name, surname = @surname, date_of_brith = @date_of_brith, username = @username, password = @password WHERE dni = @dni',

    //Calificaciones
    getQualifications : 'SELECT * FROM qualifications',
    getQualificationByCourse : 'SELECT * FROM qualifications WHERE code = @code',
    getQualificationByDniAndCourse : 'SELECT * FROM qualifications WHERE dni = @dni and code = @code',
    addNewQualification : 'INSERT INTO qualifications (code, dni, qual_1, date_1, qual_2, date_2, qual_3, date_3) VALUES (@code, @dni, @qual_1, @date_1, @qual_2, @date_2, @qual_3, @date_3)',
    deleteQualificationByDniAndCourse : 'DELETE FROM qualifications WHERE code = @code and dni = @dni',
    updateQualificationByDniAndCourse : 'UPDATE qualifications SET qual_1 = @qual_1, date_1 = @date_1, qual_2 = @qual_2, date_2 = @date_2, qual_3 = @qual_3, date_3 = @date_3 WHERE code = @code and dni = @dni',
    
    //Cursos
    getCourses : 'SELECT * FROM courses ORDER BY name DESC',
    getCourseByCode : 'SELECT * FROM courses WHERE code = @code',
    addNewCourse : 'INSERT INTO courses (code, name, dni_1, dni_2, dni_3) VALUES (@code, @name, @dni_1, @dni_2, @dni_3)',
    deleteCourseByCode : 'DELETE FROM courses WHERE code = @code ',
    updateCourseByCode : 'UPDATE courses SET name = @name, dni_1 = @dni_1, dni_2 = @dni_2, dni_3 = @dni_3 WHERE code = @code',

    //Inscripciones
    getEnrollments : 'SELECT * FROM enrollment ORDER BY code DESC',
    getEnrollmentByCode : 'SELECT * FROM enrollment WHERE code = @code',
    getEnrollmentByDni : 'SELECT * FROM enrollment WHERE dni = @dni',
    addNewEnrollment :'INSERT INTO enrollment (code, dni) VALUES ( @code, @dni)',
    deleteEnrollmentByDni : 'DELETE FROM enrollment WHERE code = @code and dni = @dni',
    updateEnrollmentByDni : 'UPDATE enrollment SET code = @code, dni = @dni WHERE code = @code and dni = @dni',

}