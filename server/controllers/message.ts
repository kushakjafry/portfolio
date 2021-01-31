import { Request, Response, NextFunction } from 'express';
import { sendEmail } from '../utils/message';
export async function sendContactMessage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    if (req.body?.email && req.body?.name && req.body?.message) {
      await sendEmail({
        to: 'kushakjafry@gmail.com',
        from: req.body.email,
        replyTo: req.body.email,
        subject: 'Mail from portfolio website',
        html:
          '<p>FROM: ' +
          req.body.email +
          '</p><p>Name: ' +
          req.body.name +
          '</p><p>Message: ' +
          req.body.message +
          '</p>',
      });
      res.status(200).json({ success: 'email sent' });
    } else {
      res.status(400).json({ error: 'Kindly Send all the fields' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
}
