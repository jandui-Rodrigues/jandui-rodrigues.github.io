import IProject from "./IProject";

interface IProjectModel {
   findAll(): Promise<IProject[]>;
   findById(id: number): Promise<IProject>;
}

export default IProjectModel;