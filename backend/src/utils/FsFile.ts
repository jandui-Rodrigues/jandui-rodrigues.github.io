import fs from "fs/promises";

async function readFile(path: string) {
  const file = await fs.readFile(path, "utf-8");
  const parsedFile = JSON.parse(file);
  return parsedFile;
}

async function writeFile<Type>(
  path: string,
  receviedProject: Type[],
): Promise<void> {
  const productString = JSON.stringify(receviedProject);
  await fs.writeFile(path, productString);
}

export { readFile, writeFile };
