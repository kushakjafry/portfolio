import * as express from 'express';
import { sendContactMessage } from '../controllers/message';
const messageRouter = express.Router();
messageRouter.post('/', sendContactMessage);
export default messageRouter;
