CREATE DATABASE telemedicine_db;

USE telemedicine_db;

CREATE TABLE patients(
	id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    date_of_birth DATE NOT NULL,
    gender ENUM('Male', 'Female', 'Other') NOT NULL,
    address TEXT NOT NULL
);

CREATE TABLE doctors(
	id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    specialization VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
	phone VARCHAR(15) NOT NULL,
    schedule TEXT NOT NULL
);

CREATE TABLE appointments(
	id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT NOT NULL,
    doctor_id INT NOT NULL,
    appointment_date DATE NOT NULL,
    appointment_time TIME NOT NULL,
    status ENUM('Scheduled', 'Completed', 'Cancelled') NOT NULL,
    FOREIGN KEY (patient_id) REFERENCES patients(id),
	FOREIGN KEY (doctor_id) REFERENCES doctors(id)
);

CREATE TABLE admin(
	id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(25) NOT NULL
);


INSERT INTO Patients (first_name, last_name, email, password_hash, phone, date_of_birth, gender, address) VALUES
('John', 'Doe', 'john.doe@gmail.com', 'johndoe1', '1234567890', '1990-01-15', 'Male', '123 Elm Street, Springfield, IL'),
('Jane', 'Smith', 'jane.smith@gmail.com', 'janesmith', '0987654321', '1985-05-23', 'Female', '456 Oak Street, Springfield, IL'),
('Alice', 'Johnson', 'alice.johnson@gmail.com', 'alice1234', '1122334455', '2000-12-01', 'Female', '789 Pine Street, Springfield, IL'),
('Bob', 'Brown', 'bob.brown@gmail.com', 'bobbrown1', '6677889900', '1978-07-11', 'Male', '321 Cedar Street, Springfield, IL'),
('Charlie', 'Davis', 'charlie.davis@gmail.com', 'charlied1', '4433221100', '1995-03-30', 'Other', '654 Birch Street, Springfield, IL');

INSERT INTO Doctors (first_name, last_name, specialization, email, phone, schedule) VALUES
('Emily', 'Clark', 'Cardiologist', 'emily.clark@gmail.com', '5551234567', '{"Monday": "09:00-17:00", "Wednesday": "09:00-17:00", "Friday": "09:00-17:00"}'),
('Michael', 'Lewis', 'Dermatologist', 'michael.lewis@gmail.com', '5559876543', '{"Tuesday": "10:00-18:00", "Thursday": "10:00-18:00"}'),
('Sarah', 'Martinez', 'Pediatrician', 'sarah.martinez@gmail.com', '5555647382', '{"Monday": "08:00-16:00", "Thursday": "08:00-16:00"}'),
('David', 'Anderson', 'Neurologist', 'david.anderson@gmail.com', '5553456789', '{"Wednesday": "11:00-19:00", "Friday": "11:00-19:00"}'),
('Laura', 'Thomas', 'Orthopedic Surgeon', 'laura.thomas@gmail.com', '5556781234', '{"Monday": "09:00-17:00", "Tuesday": "09:00-17:00", "Thursday": "09:00-17:00"}');


INSERT INTO appointments (patient_id, doctor_id, appointment_date, appointment_time, status) VALUES
(1, 1, '2024-11-15', '09:30:00', 'Scheduled'),
(2, 2, '2024-11-16', '10:00:00', 'Completed'),
(3, 3, '2024-11-17', '08:30:00', 'Scheduled'),
(4, 4, '2024-11-18', '11:00:00', 'Cancelled'),
(5, 5, '2024-11-19', '09:00:00', 'Scheduled');

INSERT INTO admin(username, password_hash, role) VALUES
('john', 'admin123', 'SuperAdmin'),
('admin_sarah', 'sarah123', 'Admin')

