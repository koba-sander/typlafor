import * as fs from 'fs';
//CallbackをPromiseに変換する
const { readFile } = promisifyAll(fs);
export async function CreateFile(filePath, rootPath) {
    try {
        const data = await ;
    }
    catch (err) {
        console.error(`削除に失敗しました: ${err}`);
    }
}
