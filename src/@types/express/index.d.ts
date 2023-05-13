declare namespace Express {
  export interface Request {
    client: {
      id: string;
      client: string;
    };
  }
}
