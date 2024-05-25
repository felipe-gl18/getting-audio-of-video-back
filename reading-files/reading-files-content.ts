import fs from "node:fs/promises"
import path from "node:path";
export async function readingAllFileContent(file_id: string, video_extension: string){
    const file_path = `./audios/${file_id}.${video_extension}`
    const file_content = await fs.readFile(file_path, {encoding: "base64"});
    const file_stats = await fs.stat(file_path);
    const file_size =  file_stats.size;
    const file_name = path.basename(file_path).split(".")[0];
    const file_extension = path.extname(file_path).split(".")[1];
    return {file_content, file_size, file_name, file_extension};
}