export class ClientError extends Error {
  public constructor(public message: string, public status: number = 400) {
    super(message);
  }
}
