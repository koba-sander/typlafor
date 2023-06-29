import * as fs from 'fs';
import { promisify } from 'util';
//CallbackをPromiseに変換する
const { readdir, rename, readFile, writeFile, mkdir } = promisifyAll(fs);
function promisifyAll(obj) {
    const result = {};
    for (const key in obj) {
        if (typeof obj[key] === 'function') {
            result[key] = promisify(obj[key]);
        }
    }
    console.log(result);
    return result;
}
