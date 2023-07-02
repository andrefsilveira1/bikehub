# Bikehub

Web project using fastify and vue

## Execute frontend:

- Run: `npm run dev`

## Execute backend:

- Create a `.env` file. Take a look at `.env.example`.
- Synchronize your local database with any new migrations/seed files with `yarn db:setup`.
- If you're using Docker, then just run `docker compose up`.
- If not, then setup your Postgres database and run the server with `yarn dev`.

## Todo list

- [x] Carregar os pontos de aluguel a partir do back
- [ ] Finalizar modal no front
- [x] Implementar componente de tabela no front
- [x] Implementar rota no back de recuperar bikes de um ponto
- [ ] Implementar aluguel de bike no front (integrar com rota ja pronta no back)
- [ ] Estabelecer comunicacao WebSocket
- [ ] Implementar rota no back de recuperar os alugueis de um usuario
- [ ] Implementar tela de seus alugueis
- [ ] Implementar inscricao do usuario no front
