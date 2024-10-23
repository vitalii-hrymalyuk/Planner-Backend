## Planner Backend

A backend service for a full-stack task management application. This backend is built using NestJS, TypeScript, and Prisma ORM, with PostgreSQL as the database. Authentication is handled via JSON Web Tokens (JWT).

---

## Features

- **User Authentication**
  - Secure login
  - Registration using JWT
- **Task Management**
  - Create tasks
  - Read tasks
  - Update tasks
  - Delete tasks

---

## Technology Stack

- **[NestJS](https://docs.nestjs.com/)**: A progressive Node.js framework for building efficient server-side applications.

-- **[TypeScript](https://www.typescriptlang.org/docs/)**: A strongly typed programming language that builds on JavaScript.

- **[Prisma](https://www.prisma.io/docs/getting-started)**: Next-generation ORM for Node.js and TypeScript.

- **[PostgreSQL](https://www.postgresql.org/docs/)**: An advanced open-source relational database.

-- **[NestJS JWT](https://docs.nestjs.com/security/authentication)**: An open standard for secure data transmission.

---

## ORM

Prisma is used as the ORM (Object-Relational Mapping) technology for database querying.

In conjunction with the VS Code extension, it allows you to conveniently compose models, generate a database object, and provides a convenient API for working with the database.

Prisma also provides a handy Prisma Studio (npx prisma studio) that allows direct interaction with the database and supports all CRUD operations.

---

## Database

A PostgreSQL database is used to store all the application information.

--

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- PostgreSQL (v12 or higher)

---

## Installation

1. Clone the repository

```bash
   git clone https://github.com/vitalii-hrymalyuk/planner-backend.git
```

2. Navigate to the project directory

```bash
   cd planner-backend
```

3.

```bash
   	# Using npm
   	npm install

   	# Or using yarn
   	yarn install
```

---

## Configuration

1. Create an .env file in root folder
2. Set up environment variables by adding the following to your `.env` file:
   ```env
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
   JWT_SECRET="your_jwt_secret"
   ```

---

## Database Migration

1. Generate Prisma Client

```bash
    npx prisma generate
```

2. Run migrations

```bash
   npx prisma migrate dev --name init
```

---

## Running the Application

1. Start the development server

```bash
# Using npm
npm run start:dev

# Or using yarn
yarn start:dev

```

2. Access the application

The server will be running at http://localhost:4200.

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

---

## License

This project is licensed under the MIT License.

---

## Contact Information

- **Author**: Vitalii Hrymalyuk
- **Email**: [vitalii.hrymalyuk@gmail.com](mailto:vitalii.hrymalyuk@gmail.com)

Feel free to reach out if you have any questions or need assistance setting up the project.
