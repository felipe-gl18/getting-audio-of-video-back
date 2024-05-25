import { exec } from "node:child_process";
import { randomUUID } from "node:crypto";
import util from "node:util"
import fs from "node:fs/promises";
export async function processingFile(file: any, extension: string, res: any){
    const uuid = randomUUID();
    //const file_name = file.originalname;
    const file_buffer = file.buffer;
    const execAsync = util.promisify(exec)
    await fs.writeFile(`videos/${uuid}.mp4`, file_buffer, {"encoding": "binary"});
    await execAsync(`"./sh/test.sh" ${uuid} ${extension}`)
    res.end()
}