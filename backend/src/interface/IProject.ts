type Id = number

interface IProject {
  id: Id
  name: string;
  Image: string;
  deplay: string;
  github: string;
  tag: number[];
  description: string;
  dificulty: string;
}
interface IProjectCreate {
  name: string;
  Image: string;
  deplay: string;
  github: string;
  tag: number[];
  description: string;
  dificulty: string;
}

export {
  IProjectCreate,
}
export default IProject;
