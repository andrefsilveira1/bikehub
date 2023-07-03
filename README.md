# Bikehub

Web project using fastify and vue

## Execute frontend:

- Run: `npm run dev`

## Execute backend:

- Create a `.env` file. Take a look at `.env.example`.
- If you're using Docker, then just run `docker compose up`.
- Synchronize your local database with any new migrations/seed files with `yarn db:setup`.
- If not, then setup your Postgres database and run the server with `yarn dev`.

## Using Bikehub:

There is pre registered users that you can log in with them. Take a look at back/database/seeds/create_default_users`. If you want, change the users as you wish.
