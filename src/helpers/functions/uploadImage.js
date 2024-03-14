// import path from "path";
// import fs from "fs";
// import { writeFile } from "fs/promises";
import { randomUUID } from "crypto";
import { put } from "@vercel/blob";


const UploadImage = async (file, type) => {

    if (file.name === "undefined") {
        return { success: true, filename: false, url: false }
    }

    const dir = `public/${type}/`;

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = type.toUpperCase() + "_" + new Date().toISOString().split('T')[0].toString() + "_" + randomUUID().toString() + "_" + file.name.replaceAll(" ", "_");

    try {
        // if (!fs.existsSync(dir)) {
        //     fs.mkdirSync(dir);
        // }

        const { url } = await put(dir + filename, buffer, {
            access: 'public'
        });
        // const { url } = await put(`public/${type}/` + filename, buffer, { access: 'public' });

        // await writeFile(
        //     path.join(process.cwd(), `public/${type}/` + filename),
        //     buffer
        // );
        if (url) {
            return { success: true, filename: `/${type}/` + filename, url: url }

        } else {
            return { success: true, filename: `/${type}/` + filename }

        }
    } catch (error) {
        return { success: false, error: "image upload error" }
    }

}

export default UploadImage
