# Node.js Todo Application with User Authentication

This is a simple Node.js CRUD application with user authentication using JSON Web Tokens (JWTs). It provides endpoints for creating, reading, updating, and deleting todo items, along with user registration and login functionality.

## Libraries Used

- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **Mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
- **Body-parser**: Node.js body parsing middleware.
- **Bcrypt.js**: Library to hash passwords.
- **Jsonwebtoken**: Implementation of JSON Web Tokens (JWT) for Node.js.

## Getting Started

To run the application locally, follow these steps:

1. Clone this repository to your local machine:

```
git clone <repository-url>
```

2. Install dependencies:
```
npm install
```

3. Start the server:

```
npm run serve
```

4. Once the server is running, you can use tools like Thunder Client, Postman, or any other HTTP client to interact with the API endpoints.

## API Documentation

### User Routes

- `POST /api/users/register`: Register a new user.
- `POST /api/users/login`: Log in an existing user.

### Todo Routes

- `GET /api/todos`: Retrieve all todo items.
- `POST /api/todos`: Create a new todo item.
- `GET /api/todos/:todoId`: Retrieve a specific todo item by its ID.
- `PUT /api/todos/:todoId`: Update a specific todo item by its ID.
- `DELETE /api/todos/:todoId`: Delete a specific todo item by its ID.
