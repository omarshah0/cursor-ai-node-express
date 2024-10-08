# TypeScript Express Prisma API

This project is a TypeScript-based Express API using Prisma ORM with SQLite database.

## Prerequisites

- Node.js (v14 or later)
- npm or pnpm

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/typescript-express-prisma-api.git
   cd typescript-express-prisma-api
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or if you're using pnpm:
   ```
   pnpm install
   ```

3. Set up the environment variables:
   - Copy the `.env.example` file to `.env`
   - Update the `DATABASE_URL` if needed (default is set for SQLite)

## Database Setup

1. Generate Prisma client:
   ```
   npm run db:generate
   ```

2. Run database migrations:
   ```
   npm run db:migrate
   ```

3. Seed the database (optional):
   ```
   npm run db:seed
   ```

## Running the Application

- For development:
  ```
  npm run dev
  ```

- For production:
  ```
  npm run build
  npm start
  ```

The API will be available at `http://localhost:3000` (or the port specified in your `.env` file).

## API Endpoints

- GET `/api/users`: Get all users
- GET `/api/users/:id`: Get a user by ID
- POST `/api/users`: Create a new user

## Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the project
- `npm start`: Start the production server
- `npm run lint`: Run ESLint
- `npm run db:generate`: Generate Prisma client
- `npm run db:migrate`: Run database migrations
- `npm run db:seed`: Seed the database
- `npm run db:reset`: Reset the database (caution: this will delete all data)

## Project Structure
