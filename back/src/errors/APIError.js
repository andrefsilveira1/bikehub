export default class APIError extends Error {
  statusCode;
  constructor(
    message = "Algo deu errado. Tente novamente mais tarde.",
    statusCode = 500
  ) {
    super(message);
    this.statusCode = statusCode;
  }
}
