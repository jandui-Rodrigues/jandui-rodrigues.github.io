import IProject from "../interface/IProject";
import IProjectModel from "../interface/IProjectModel";
import FsProjectModel from "../utils/FsProjectModel";

export default class ProjectModel implements IProjectModel {
    private model = new FsProjectModel();
    async findAll(): Promise<IProject[]> {
        const projects = await this.model.findAll();
        return projects;
    } 
}