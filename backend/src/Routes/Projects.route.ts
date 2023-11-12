import { Router } from "express";
export default class ProjectRouter {
    private router: Router;

    constructor() {
        this.router = Router();
    }

    buildRoutes() {
        this.router.use('/', async (req, res) =>{})
    return this.router;
    }
}