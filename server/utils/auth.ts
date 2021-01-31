import { Request, Response, NextFunction } from 'express';
export function authenticateAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.body?.admin && req.body?.password) {
    if (
      req.body.admin === process.env.admin &&
      req.body.password === process.env.password
    ) {
      next();
    } else {
      res.status(401).json({ error: 'UnAuthorized User' });
    }
  } else {
    res.status(401).json({ error: 'UnAuthorized User' });
  }
}
