CREATE TABLE students (
dni INT NOT NULL PRIMARY KEY,
name VARCHAR(50) NOT NULL,
surname VARCHAR(50) NOT NULL,
date_of_brith DATE NOT NULL,
date_of_admission DATE,
username VARCHAR(20) NOT NULL,
password VARCHAR(20) NOT NULL
);

CREATE TABLE teachers (
dni INT NOT NULL PRIMARY KEY,
name VARCHAR(50) NOT NULL,
surname VARCHAR(50) NOT NULL,
date_of_brith DATE,
username VARCHAR(20) NOT NULL,
password VARCHAR(20) NOT NULL
);

CREATE TABLE courses (
code INT NOT NULL PRIMARY KEY,
name VARCHAR(50) NOT NULL,
dni_1 INT NOT NULL,
dni_2 INT NOT NULL,
dni_3 INT NOT NULL
);

CREATE TABLE qualifications (
id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
code INT NOT NULL,
dni INT NOT NULL,
qual_1 INT,
date_1 DATE,
qual_2 INT,
date_2 DATE,
qual_3 INT,
date_3 DATE
);

CREATE TABLE enrollment (
id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
code INT NOT NULL,
dni INT NOT NULL
); 

CREATE TABLE notifications (
id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
datatime datetime NOT NULL,
subject text NOT NULL,
from_ text NOT NULL,
to_ text NOT NULL,
message text NOT NULL,
); 