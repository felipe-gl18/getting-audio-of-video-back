import fs from "node:fs/promises"
export async function readingAllFiles(){
    const dir_content = await fs.readdir("./audios");    
    const files_ids = dir_content.map( async (file: any) => {
        return file.split(".")[0]
        //const file_content = await fs.readFile(`./audios/${file}`, {encoding: "binary"});
        //return file_content;
    })
    const result =  Promise.all(files_ids);
    return result;
}