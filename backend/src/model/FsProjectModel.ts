import fs from "fs/promises";
import path from "path";
import IProject, { IProjectCreate } from "../interface/IProject";
import { readFile, writeFile } from "../utils/FsFile";

const projectsPath = path.resolve(__dirname, "../data/Projects.json");
export default class FsProjectModel {
  async findAll(): Promise<IProject[]> {
    const project = await readFile(projectsPath);
    return project;
  }

  async findById(id: number): Promise<IProject> {
    const project = await readFile(projectsPath);
    const projectFound = project.find((project: IProject) => project.id === id);
    console.log(projectFound);
    if (!projectFound) throw new Error("Project not found");
    return projectFound;
  }

  async create(project: IProjectCreate): Promise<IProject> {
    const projects = await readFile(projectsPath) as IProject[];
    const projectWithId = { id: projects.length + 1, ...project };
    projects.push(projectWithId);
    await writeFile<IProject>(projectsPath, projects);
    return projectWithId;
  }
}
