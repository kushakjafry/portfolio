import { Response } from 'express';
function sendError(res: Response, status: number, message: string): void {
  res.status(status).json(message);
}
