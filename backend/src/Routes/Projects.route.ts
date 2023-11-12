import { Router } from "express";
import ProjectController from "../controller/Project.controller";
export default class ProjectRouter {
    private router: Router;
    private productsController = new ProjectController();

    constructor() {
        this.router = Router();
    }

    buildRoutes() {
       this.router.use('/:id', (req, res) => this.productsController.findById(req, res));
       this.router.use('/', (req, res) => this.productsController.findAll(req, res));
       return this.router;
    }
}