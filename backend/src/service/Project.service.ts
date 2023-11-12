import IProject from "../interface/IProject";
import IProjectModel from "../interface/IProjectModel";
import { ServiceResponse } from "../interface/ServiceResponse";
import ProjectModel from "../model/ProjectAdpFs.module";

export default class ProjectService {
    constructor(
        private projectModel:IProjectModel = new ProjectModel
    ) {

    }
    async findAll():Promise<ServiceResponse<IProject[]>> {
        const projects = await this.projectModel.findAll();
        return {status: 'SUCCESSFUL',data: projects }
    }
    
    async findByid(id: number):Promise<ServiceResponse<IProject>> {
        const project = await this.projectModel.findById(id);
        return {status: 'SUCCESSFUL',data: project }
    }

    async create(project: IProject):Promise<ServiceResponse<IProject>> {
        const projectCreated = await this.projectModel.create(project);
        return {status: 'CREATED',data: projectCreated }
    }
}