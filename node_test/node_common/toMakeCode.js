import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';
const { readdir, rename, readFile, writeFile, mkdir } = promisifyAll(fs);
function promisifyAll(obj) {
    const result = {};
    for (const key in obj) {
        if (typeof obj[key] === 'function') {
            result[key] = promisify(obj[key]);
        }
    }
    return result;
}
export async function renameFiles(directoryPath) {
    try {
        const files = await readdir(directoryPath);
        let index = 1;
        for (const file of files) {
            const oldPath = path.join(directoryPath, file);
            if (isNaN(file[0]) === false && file[1] === '_') {
            }
        }
    }
    catch (err) {
        console.error(`インデックス追加に失敗しました。: ${err}`);
    }
}
