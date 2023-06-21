import * as fs from 'fs';
/**
 * ディレクトリを開く関数
 * @param {string} dirPath ファイルパスの引数を渡す
 * 例：'C:\\Users\\koba\\Documents\\'など
 * その分処理の時間を遅らせる。
*/
export async function openDir(dirPath) {
    try {
        const dir = await fs.promises.opendir(dirPath);
        for await (const dirent of dir) {
            console.log(dirent.name);
        }
    }
    catch (err) {
        console.error(`Error opening directory: ${err}`);
    }
}
