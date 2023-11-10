import fs from "fs/promises";
import path from "path";
import IProject from "../interface/IProject";

const talkersPath = path.resolve(__dirname, '../data/Projects.json');
export default class FsProjectModel {

    read() {
        return fs.readFile(talkersPath, 'utf-8');
    }
    async write(receviedProject: IProject[]) {
        const projectFile = await this.read();
        const project = JSON.parse(projectFile);
        project.push(receviedProject);
        const productString = JSON.stringify(project);
        return fs.writeFile(talkersPath, productString);
    }
    async findAll(): Promise<IProject[]> {
    const talkerFile = await this.read();
    const talkers = JSON.parse(talkerFile);
    return talkers;
    }
    
}
