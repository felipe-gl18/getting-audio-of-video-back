import fs from "node:fs/promises"
export async function readingAllFilesIDS(){
    const dir_content = await fs.readdir("./audios");    
    const files_ids = dir_content.map( async (file: any) => {
        const video_uuid = file.split(".")[0]
        const video_extension = file.split(".")[1]
        return {video_uuid, video_extension}
    })
    const result =  Promise.all(files_ids);
    return result;
}