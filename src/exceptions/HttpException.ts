class HttpException extends Error {
  public status: number;

  public message: string;

  public data: object;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export default HttpException;
