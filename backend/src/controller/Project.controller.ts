import { Request, Response } from "express";
import ProjectService from "../service/Project.service";
import mapStatusHTTP from "../utils/mapStatusHTTPS";

export default class ProjectController {
  constructor(
    private projectService = new ProjectService(),
  ) {
  }

  public async findAll(_req: Request, res: Response) {
    try {
      const { status, data } = await this.projectService.findAll();
      return res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      }
    }
  }
  public async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { status, data } = await this.projectService.findByid(Number(id));
      return res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      }
    }
  }
  public async create(req: Request, res: Response) {
    try {
      console.log(req.body);

      const { status, data } = await this.projectService.create(req.body);
      return res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      }
    }
  }
  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { status, data } = await this.projectService.update(
        Number(id),
        req.body,
      );
      return res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      }
    }
  } 
}
