import { Router } from "express";
import ProjectRouter from "./Projects.route";

const router = Router();
const projectRouter = new ProjectRouter();

router.use('/projects', projectRouter.buildRoutes());

export default router;