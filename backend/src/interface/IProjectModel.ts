import IProject, { IProjectCreate } from "./IProject";

interface IProjectModel {
   findAll(): Promise<IProject[]>;
   findById(id: number): Promise<IProject>;
   create(project: IProjectCreate): Promise<IProject>;
   update(id: number, project: IProjectCreate): Promise<IProject>;
}

export default IProjectModel;