export default class APIError extends Error {
  statusCode;
  constructor(message = "Something went wrong", statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
  }
}
