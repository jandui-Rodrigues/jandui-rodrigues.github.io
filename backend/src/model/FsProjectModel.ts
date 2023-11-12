import fs from "fs/promises";
import path from "path";
import IProject, { IProjectCreate } from "../interface/IProject";

const projectsPath = path.resolve(__dirname, '../data/Projects.json');
export default class FsProjectModel {
    async read() {
        const file = await fs.readFile(projectsPath, 'utf-8');
        return file;
    }
    async write(receviedProject: IProject[]) {
        const projectFile = await this.read();
        const project = JSON.parse(projectFile);
        project.push(receviedProject);
        const productString = JSON.stringify(project);
        return fs.writeFile(projectsPath, productString);
    }
    async findAll(): Promise<IProject[]> {
        const projectFile = await this.read();
        const project = JSON.parse(projectFile);
        return project;
    }
    async findById(id: number): Promise<IProject> {
        const projectFile = await this.read();
        const project = JSON.parse(projectFile);
        const projectFound = project.find((project: IProject) => project.id === id);
        console.log(projectFound)
        if(!projectFound) throw new Error('Project not found');
        return projectFound;
    }
    async create(project: IProjectCreate): Promise<IProject> {
        const projectFile = await this.read();
        const projectParsed = JSON.parse(projectFile) as IProject[];
        const projectWithId = {id: projectParsed.length + 1, ...project};
        projectParsed.push(projectWithId);
        // const projectString = ;
        await fs.writeFile(projectsPath, JSON.stringify(projectParsed));
        return projectWithId;
    }
}
