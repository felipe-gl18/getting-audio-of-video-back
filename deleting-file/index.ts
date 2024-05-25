import fs from "node:fs/promises";

export async function deletingFile(file_uuid: string, video_extension: string, res: any){
    await fs.unlink(`videos/${file_uuid}.mp4`);
    await fs.unlink(`audios/${file_uuid}.${video_extension}`);
    res.end()
}