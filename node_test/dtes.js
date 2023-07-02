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
// ディレクトリを開くパスを書く
// async function test(url: string){
//     try{
//         const dir = await fs.promises.opendir(url);
//         for await(const dirent of dir){
//             console.log(dirent.name);
//         }
//         console.log("実行した");
//     } catch(err){
//     }
// }
// test('C:\\Projects\\AApp\\typlafor\\node_test\\dirPlace')
// テキストファイルを開くコードを書く
async function readFilefun(pass) {
    try {
        const file = await readFile(pass, 'utf8');
        const lines = file.split('/r/n');
        for await (const line of lines) {
            console.log(line);
        }
        console.log("実行した");
    }
    catch (err) {
        console.error(`${err}は失敗`);
    }
}
readFilefun('C:\\Projects\\AApp\\typlafor\\node_test\\dirPlace\\test.js');
