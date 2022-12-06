export default{

    //Usuarios
    getUsers : 'SELECT * FROM users ORDER BY name DESC',
    getUserByDni : 'SELECT * FROM users WHERE dni = @dni',
    getUserByCareer : 'SELECT * FROM users WHERE career = @career',
    countTotalUsersStudents : 'SELECT COUNT (*) FROM users WHERE teacher = false AND admin = false',
    countTotalUsersTeachers : 'SELECT COUNT (*) FROM users WHERE teacher = true',
    addNewUser : 'INSERT INTO users (dni, name, surname, date_of_brith, date_of_admission, career, password, teacher, admin) VALUES (@dni, @name, @surname, @date_of_brith, @date_of_admission, @career, @password, @teacher, @admin)',
    deleteUserByDni : 'DELETE FROM users WHERE dni = @dni',
    updateUserByDni : 'UPDATE users SET name = @name, surname = @surname, date_of_brith = @date_of_brith, date_of_admission = @date_of_admission, career = @career, password = @password WHERE dni = @dni',

    //Calificaciones
    getQualifications : 'SELECT * FROM qualifications',
    getQualificationByCourse : 'SELECT * FROM qualifications WHERE code = @code',
    getQualificationByDniAndCourse : 'SELECT * FROM qualifications WHERE dni = @dni and code = @code',
    addNewQualification : 'INSERT INTO qualifications (code, dni, qual_1, date_1, qual_2, date_2, qual_3, date_3) VALUES (@code, @dni, @qual_1, @date_1, @qual_2, @date_2, @qual_3, @date_3)',
    deleteQualificationByDniAndCourse : 'DELETE FROM qualifications WHERE code = @code and dni = @dni',
    updateQualificationByDniAndCourse : 'UPDATE qualifications SET qual_1 = @qual_1, date_1 = @date_1, qual_2 = @qual_2, date_2 = @date_2, qual_3 = @qual_3, date_3 = @date_3 WHERE code = @code and dni = @dni',
    
    //Cursos
    getCourses : 'SELECT * FROM courses',
    getCourseByCode : 'SELECT * FROM courses WHERE code = @code',
    getCourseByCareer : 'SELECT * FROM courses WHERE career = @career',
    addNewCourse : 'INSERT INTO courses (code, name, career, season, teacher, date_test1, date_test2, date_test3, date_test4, date_ap1, date_ap2, date_ap3, date_ap4) VALUES (@code, @name, @career, @season, @teacher, @date_test1, @date_test2, @date_test3, @date_test4, @date_ap1, @date_ap2, @date_ap3, @date_ap4)',
    deleteCourseByCode : 'DELETE FROM courses WHERE code = @code ',
    updateCourseByCode : 'UPDATE courses SET name = @name, career = @career, season = @season, teacher = @teacher, date_test1 = @date_test1, date_test2 = @date_test2, date_test3 = @date_test3, date_test4 = @date_test4, date_ap1 = @date_ap1, date_ap2 = @date_ap2, date_ap3 = @date_ap3, date_ap4 = @date_ap4 WHERE code = @code',
    
    //Inscripciones
    getEnrollments : 'SELECT * FROM enrollment ORDER BY code DESC',
    getEnrollmentByCode : 'SELECT * FROM enrollment WHERE code = @code',
    getEnrollmentByDni : 'SELECT * FROM enrollment WHERE dni = @dni',
    addNewEnrollment :'INSERT INTO enrollment (code, dni) VALUES ( @code, @dni)',
    deleteEnrollmentByDni : 'DELETE FROM enrollment WHERE code = @code and dni = @dni',
    updateEnrollmentByDni : 'UPDATE enrollment SET code = @code, dni = @dni WHERE code = @code and dni = @dni',

    //Notificaciones
    getNotifications : 'SELECT * FROM notifications ORDER BY id DESC',
    getNotificationsByToDni : 'SELECT * FROM notifications WHERE to_dni = @to_dni',
    getNotificationsByFromDni : 'SELECT * FROM notifications WHERE from_dni = @from_dni',
    getNotificationById : 'SELECT * FROM notifications WHERE id = @id',
    addNewNotification : 'INSERT INTO notifications (datatime, subject, from_dni, to_dni, message) VALUES (@datatime, @subject, @from_dni, @to_dni, @message)',
    deleteNotificationById : 'DELETE FROM notifications WHERE id = @id',
    updateNotificationById : 'UPDATE notifications SET datatime = @datatime, subject = @subject, from_dni = @from_dni, to_dni = @to_dni, message = @message WHERE id = @id',
    
    //Carreras
    getCareers : 'SELECT * FROM careers',
    getCareerByCode : 'SELECT * FROM careers WHERE code = @code',
    addNewCareer : 'INSERT INTO careers (code, name) VALUES (@code, @name)',
    deleteCareerByCode : 'DELETE FROM careers WHERE code = @code ',
    updateCareerByCode : 'UPDATE careers SET name = @name WHERE code = @code',
    
}