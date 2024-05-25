import express from "express";
import multer from "multer";
import cors from "cors";
import { readingAllFilesIDS } from "../reading-files/reading-files-ids";
import { processingFile } from "../processing-file";
import { readingAllFileContent } from "../reading-files/reading-files-content";
import { deletingFile } from "../deleting-file";
const storage = multer.memoryStorage();
const upload = multer({storage})
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get("/", async (req, res) => {
    const files = await readingAllFilesIDS();
    res.json(files)
})
app.post("/", upload.single('video'), async (req, res) => {
    const video = req.file;
    const extension = req.body.extension;
    await processingFile(video, extension, res);
})
app.get("/video/:video_uuid/:video_extension", async (req: any, res: any) => {
    const { video_uuid, video_extension } = req.params;
    const file = await readingAllFileContent(video_uuid, video_extension);
    res.json(file);
})
app.delete("/video/:video_uuid/:video_extension", async (req: any, res: any) => {
    const { video_uuid, video_extension } = req.params;
    await deletingFile(video_uuid, video_extension, res);
})
app.listen(3002, () => {
    console.log("The server is running")
})