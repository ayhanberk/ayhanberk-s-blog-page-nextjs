import path from "path";
import fs from "fs";
import { writeFile } from "fs/promises";
import { randomUUID } from "crypto";

const UploadImage = async (file, type) => {
    const dir = `public/${type}/`;

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = type.toUpperCase() + "_" + new Date().toISOString().split('T')[0].toString() + "_" + randomUUID().toString() + "_" + file.name.replaceAll(" ", "_");

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    try {
        await writeFile(
            path.join(process.cwd(), `public/${type}/` + filename),
            buffer
        );
        return { success: true, filename: `/${type}/` + filename }
    } catch (error) {
        console.log("Error occured ", error);
        return { success: false, error: "image upload error" }
    }

}

export default UploadImage
