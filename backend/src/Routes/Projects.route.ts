import { Router } from "express";
import ProjectController from "../controller/Project.controller";
export default class ProjectRouter {
  private router: Router;
  private productsController = new ProjectController();

  constructor() {
    this.router = Router();
  }

  buildRoutes() {
    this.router.get(
      "/:id",
      (req, res) => this.productsController.findById(req, res),
    );
    this.router.post(
      "/",
      (req, res) => this.productsController.create(req, res),
    );
    this.router.get(
      "/",
      (req, res) => this.productsController.findAll(req, res),
    );
    this.router.put(
      "/:id",
      (req, res) => this.productsController.update(req, res),
    );
    this.router.delete(
      "/:id",
      (req, res) => this.productsController.remove(req, res),
    );
    return this.router;
  }
}
