# Project Name

This project is a Node.js application that uses Express.js for the server, Sequelize for ORM, and Umzug for migrations. The application creates a PostgreSQL database, runs migrations to create a `users` table, and adds a default user with a balance of 10000.

## Prerequisites

- Node.js
- PostgreSQL

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/aadylbeg/userBalance.git
   cd userBalance
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `config.env` file in the root directory and add your database configuration:

   ```env
   DB_USER=your_db_username
   DB_PASS=your_db_password
   DB_NAME=your_db_name
   DB_HOST=your_db_host

   PORT=your_port_number
   ```

## Running the Application

1. Start the PostgreSQL server.

2. Run the application:

   ```sh
   npm start
   ```

   This will create the database if it doesn't exist, run the migrations to create the `users` table, and add a default user with a balance of 10000.

## API Endpoints

- `GET /api/v1/users`: Gets all users.
- `GET /api/v1/users/{id}`: Gets user by id.
- `PUT /api/v1/users/{id}`: Updates user by id: req.body = {amount: <your_amount>}.
