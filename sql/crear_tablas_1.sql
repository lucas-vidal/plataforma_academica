
CREATE TABLE alumnos (
dni INT NOT NULL PRIMARY KEY,
nombre VARCHAR(50) NOT NULL,
apellido VARCHAR(50) NOT NULL,
fecha_naiemiento DATE NOT NULL,
fecha_ingreso DATE,
usuario VARCHAR(20) NOT NULL,
contraseña VARCHAR(20) NOT NULL
);

CREATE TABLE docentes (
dni INT NOT NULL PRIMARY KEY,
nombre VARCHAR(50) NOT NULL,
apellido VARCHAR(50) NOT NULL,
fecha_naiemiento DATE,
usuario VARCHAR(20) NOT NULL,
contraseña VARCHAR(20) NOT NULL
);

CREATE TABLE materias (
codigo INT NOT NULL PRIMARY KEY,
nombre VARCHAR(50) NOT NULL,
dni_docente_1 INT NOT NULL,
dni_docente_2 INT NOT NULL,
dni_docente_3 INT NOT NULL
);

CREATE TABLE calificaciones (
id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
codigo_materia INT NOT NULL,
dni_alumno INT NOT NULL,
nota_1 INT,
fecha_1 DATE,
nota_2 INT,
fecha_2 DATE,
nota_3 INT,
fecha_3 DATE
);

CREATE TABLE inscripciones_materias (
id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
codigo_materia INT NOT NULL,
dni_alumno INT NOT NULL
);