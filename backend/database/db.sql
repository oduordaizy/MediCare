CREATE DATABASE IF NOT EXISTS telemedicine_db;

USE telemedicine_db;

-- Drop existing tables if they exist
DROP TABLE IF EXISTS appointments;
DROP TABLE IF EXISTS patients;
DROP TABLE IF EXISTS doctors;
DROP TABLE IF EXISTS admin;
DROP TABLE IF EXISTS Users;

-- Create Users table (matches User.js model)
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('patient', 'doctor', 'admin') DEFAULT 'patient',
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create Patients table (matches patient.js model)
CREATE TABLE Patients (
    id INT PRIMARY KEY,
    age INT,
    gender VARCHAR(50),
    phone VARCHAR(50),
    medical_history TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id) REFERENCES Users(id) ON DELETE CASCADE
);

-- Create Doctors table
CREATE TABLE Doctors (
    id INT PRIMARY KEY,
    specialization VARCHAR(100),
    location VARCHAR(255),
    rating FLOAT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id) REFERENCES Users(id) ON DELETE CASCADE
);

-- Create Appointments table
CREATE TABLE appointments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT NOT NULL,
    doctor_id INT NOT NULL,
    appointment_date DATE NOT NULL,
    appointment_time TIME NOT NULL,
    status ENUM('Scheduled', 'Completed', 'Cancelled') DEFAULT 'Scheduled',
    FOREIGN KEY (patient_id) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (doctor_id) REFERENCES Users(id) ON DELETE CASCADE
);

-- Insert sample data
INSERT INTO Users (name, email, password, role) VALUES
('John Doe', 'john.doe@gmail.com', '$2b$10$hashedpassword1', 'patient'),
('Jane Smith', 'jane.smith@gmail.com', '$2b$10$hashedpassword2', 'patient'),
('Alice Johnson', 'alice.johnson@gmail.com', '$2b$10$hashedpassword3', 'patient'),
('Bob Brown', 'bob.brown@gmail.com', '$2b$10$hashedpassword4', 'patient'),
('Charlie Davis', 'charlie.davis@gmail.com', '$2b$10$hashedpassword5', 'patient'),
('Emily Clark', 'emily.clark@gmail.com', '$2b$10$hashedpassword6', 'doctor'),
('Michael Lewis', 'michael.lewis@gmail.com', '$2b$10$hashedpassword7', 'doctor'),
('Sarah Martinez', 'sarah.martinez@gmail.com', '$2b$10$hashedpassword8', 'doctor'),
('David Anderson', 'david.anderson@gmail.com', '$2b$10$hashedpassword9', 'doctor'),
('Laura Thomas', 'laura.thomas@gmail.com', '$2b$10$hashedpassword10', 'doctor'),
('Admin User', 'admin@telemedicine.com', '$2b$10$hashedpassword11', 'admin');

-- Insert patient profiles
INSERT INTO Patients (id, age, gender, phone, medical_history) VALUES
(1, 30, 'Male', '1234567890', 'No major medical history'),
(2, 35, 'Female', '0987654321', 'Allergic to penicillin'),
(3, 25, 'Female', '1122334455', 'Asthma'),
(4, 45, 'Male', '6677889900', 'Diabetes type 2'),
(5, 28, 'Other', '4433221100', 'No major medical history');

-- Insert doctor profiles
INSERT INTO Doctors (id, specialization, location, rating) VALUES
(6, 'Cardiologist', 'Nairobi General Hospital', 4.8),
(7, 'Dermatologist', 'Mombasa Medical Center', 4.6),
(8, 'Pediatrician', 'Kampala Institute', 4.9),
(9, 'Neurologist', 'Dar es Salaam Hospital', 4.7),
(10, 'Orthopedic Surgeon', 'Nairobi General Hospital', 4.5);

-- Insert appointments
INSERT INTO appointments (patient_id, doctor_id, appointment_date, appointment_time, status) VALUES
(1, 6, '2024-11-15', '09:30:00', 'Scheduled'),
(2, 7, '2024-11-16', '10:00:00', 'Completed'),
(3, 8, '2024-11-17', '08:30:00', 'Scheduled'),
(4, 9, '2024-11-18', '11:00:00', 'Cancelled'),
(5, 10, '2024-11-19', '09:00:00', 'Scheduled');

