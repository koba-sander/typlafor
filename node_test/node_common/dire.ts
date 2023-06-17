import * as fs from 'fs';
import * as path from 'path';

export async function openDir(dirPath: string) {
    try {
        const dir = await fs.promises.opendir(dirPath);
        for await (const dirent of dir) {
            console.log(dirent.name);
        }
    } catch (err) {
        console.error(`Error opening directory: ${err}`);
    }
}


