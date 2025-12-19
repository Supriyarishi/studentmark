Student Marks Dashboard
Project Overview

This is a frontend and backend project for managing student login, registration, and marks display.
Students can sign up, login, and view their marks for multiple subjects. The app also calculates total and average marks automatically.

Features

Student Registration with name, roll number, password, and marks for 5 subjects.

Login Authentication using JWT.

Marks Dashboard:

Displays individual subject marks.

Calculates total and average marks.

Logout functionality.

Responsive and modern UI with gradient background, cards, and hover effects.

Dynamic Login / Sign Up toggle form.

Tech Stack

Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express.js, MongoDB

Authentication: JWT (JSON Web Token)

HTTP Client: Fetch API

Installation & Setup

Clone the repository

git clone <repository-url>
cd <project-folder>


Install backend dependencies

npm install express mongoose bcrypt jsonwebtoken cors


Start MongoDB

mongod


Run the server

node app.js


Open frontend

Open index.html in a browser.

The frontend communicates with the backend at http://localhost:3000.

API Endpoints
Endpoint	Method	Description	Body / Headers
/api/register	POST	Register a new student	JSON body (rollno, name, password, marks)
/api/login	POST	Login a student	JSON body (rollno, password)
/api/marks	GET	Get student marks	Header: Authorization: Bearer <token>
Sample JSON for Testing
Register
{
  "rollno": "101",
  "name": "Divya",
  "password": "12345",
  "marks": {
    "tamil": 85,
    "english": 90,
    "maths": 95,
    "science": 88,
    "social": 92
  }
}

Login
{
  "rollno": "101",
  "password": "12345"
}

Get Marks
GET /api/marks
Headers: Authorization: Bearer <token>

Screenshots

Login / Sign Up Page


Marks Dashboard Page


Future Enhancements

Add edit marks functionality for admin.

Add subject-wise charts for visualization.

Add password reset option.

Author

Supriya R

College Project for KEC College,Perundurai
