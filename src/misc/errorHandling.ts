import express from 'express';

export class HttpError extends Error {
    statusCode: number;
  
    constructor(message: string, statusCode: number) {
      super(message);
      this.name = 'HttpError';
      this.statusCode = statusCode;
    }
  }
  
  export const handleErrorResponse = (res: express.Response, error: Error) => {
    const statusCode = error instanceof HttpError ? error.statusCode : 500;
    res.status(statusCode).json({ message: error.message });
  };
