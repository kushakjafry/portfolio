import * as express from 'express';
import { authenticateAdmin } from '../utils/auth';
const projectRouter = express.Router();
import { projectController } from '../controllers/project';

projectRouter.get('/', projectController.getAllProjects);
projectRouter.post('/', authenticateAdmin, projectController.addNewProject);
projectRouter.get('/:projectName', projectController.getProjectByName);
projectRouter.delete(
  '/:projectName',
  authenticateAdmin,
  projectController.deleteProjectByName
);
export default projectRouter;
