class BodyResponse {
  private status: number;
  private message: string;
  private data: [];
  constructor(status: number, message: string, data: []) {
    this.status = status;
    this.message = message;
    this.data = data;
  }
}

export default BodyResponse;
