import IProject from "./IProject";

interface IProjectModel {
    findAll(): Promise<IProject[]>;
}

export default IProjectModel;