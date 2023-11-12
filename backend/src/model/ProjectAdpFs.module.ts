import IProject from "../interface/IProject";
import IProjectModel from "../interface/IProjectModel";
import FsProjectModel from "./FsProjectModel";
export default class ProjectModel implements IProjectModel {
    private model = new FsProjectModel();
    async findAll(): Promise<IProject[]> {
        const projects = await this.model.findAll();
        return projects;
    }
    async findById(id: number): Promise<IProject> {
        const projects = await this.model.findById(id)
        return projects;
    }

    async create(project: IProject): Promise<IProject> {
        const projects = await this.model.create(project);
        return projects;
    }
}