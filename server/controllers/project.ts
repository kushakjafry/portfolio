import ProjectModel from '../models/project';
import { Request, Response, NextFunction } from 'express';
export const projectController = {
  getAllProjects: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const projects = await ProjectModel.find();
      res.status(200).json(projects);
    } catch (err) {
      res.status(500).json({ error: 'Some Error Occured' });
    }
  },
  getProjectByName: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const project = await ProjectModel.findOne({
        name: req.params.projectName,
      });
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({ error: 'Not Found Error' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Some Error Occured' });
    }
  },
  addNewProject: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const project = await ProjectModel.create(req.body);
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(500).json({ error: 'Some Error occurred' });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteProjectByName: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const project = await ProjectModel.findOneAndDelete({
        name: req.params.projectName,
      });
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(500).json({ error: 'Some Error occurred' });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
