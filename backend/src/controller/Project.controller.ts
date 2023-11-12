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
            const {status, data } = await this.projectService.findAll();
        return res.status(mapStatusHTTP(status)).json(data);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({error: error.message});
            }
            
        }
    }
}