import { Response } from 'express';

interface ErrorResponse {
  error: string;
}

const errorHandler = (res: Response, err: any): void => {
  res.status(400).json({
    error: `Xatolik: ${err}`,
  } as ErrorResponse);
};

export { errorHandler };
