# Role-Based Access Control (RBAC)

This project implements Role-Based Access Control (RBAC) using Node.js, MongoDB, JWT. The application supports user authentication and authorization, and it ensures that users can access resources based on their roles: Admin, Manager, and User.

# Project Structure

Backend (Node.js + Express):

Handles user authentication, registration, login, and role-based access control.
Implements JWT-based authentication to manage sessions.
MongoDB is used for database storage.

# Features
User Registration: Allows new users to sign up and select a role (Admin, Manager, or User).
User Login: Users can log in and receive a JWT token.
Role-Based Access Control (RBAC): Access to certain routes and data is based on the user's role.
Admin: Can access and perform administrative actions and can access /admin, /manager, /user routes.
Moderator: Can access restricted data but with fewer privileges than Admin and can access /manager, /user routes.
User: Regular user with limited access and can access /user routes only.
Protected Routes: Certain routes and data are only accessible by authenticated users with the appropriate role.

# Prerequisites
Before running the project, make sure you have the following installed:

Node.js and npm (Node Package Manager)
MongoDB (local or cloud instance)
Postman (to test the APIs)

# Installation

# 1. Clone the repository

# 2. Backend Setup
 Step 1: Navigate to the backend folder:

        cd backend

 Step 2: Install dependencies:

        npm install

 Step 3: Configure environment variables:
        Create a .env file in the backend folder and add the following values:

        PORT=5000
        MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret_key

 Step 4: Run the backend server:

        npm run dev
        
        The backend should now be running on http://localhost:5000.

# 3. API Endpoints
Here’s a list of available API endpoints for testing with Postman or similar tools:

    1. POST /api/auth/register:

    Register a new user.

    Request body:

    {
    "name": "John Doe",
    "password": "password123",
    "role": "User"
    }

    2. POST /api/auth/login:

    Login and get a JWT token.

    Request body:

    {
    "email": "john@example.com",
    "password": "password123"
    }

    3. GET /api/user/admin (Protected, Admin only):

    Access by Admin role.

    Requires JWT token in the Authorization header: Bearer <JWT_TOKEN>.

    4. GET /api/user/moderator (Protected, Moderator only):

    Access by Moderator role.

    Requires JWT token in the Authorization header: Bearer <JWT_TOKEN>.

    5. GET /api/user/user (Protected, User only):

    Access by User role.

    Requires JWT token in the Authorization header: Bearer <JWT_TOKEN>.


# 4. Testing the APIs
Register a User: Use the POST /api/auth/register endpoint to register a new user with the desired role (User, Admin, Moderator).

Login a User: Use the POST /api/auth/login endpoint to authenticate and receive a JWT token.

Access Protected Routes: Use the GET /api/user/admin, GET /api/user/moderator, and GET /api/user/user endpoints by passing the JWT token in the Authorization header.


# Postman Testing Example:

 1. Register: Send a POST request to /api/auth/register with user details.

     {
         "name": "TestUser",
         "password": "testuser@123",
         "role": "User"
     }

     {
         "name": "TestUser",
         "password": "testuser@123",
         "role": "Admin"
     }

     {
         "name": "TestUser",
         "password": "testuser@123",
         "role": "Moderator"
     }


 2. Login: Send a POST request to /api/auth/login with email and password to receive the JWT token.

     {
          "email": "testuser@example.com",
          "password": "testuser@123"
     }


 3. Access Protected Routes: Send a GET request to /api/user/admin with the JWT token in the        Authorization header.

     Authorization: Bearer <JWT_TOKEN>