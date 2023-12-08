class BodyResponse {
  private status: string;
  private code: number;
  private message: string;
  private data: [] | null;

  constructor(status: string, code: number, message: string, data: [] | null) {
    this.status = status;
    this.code = code;
    this.message = message;
    this.data = data;
  }
}

export default BodyResponse;
