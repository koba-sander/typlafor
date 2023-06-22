import * as fs from 'fs';
import * as path from 'path';

/**
 * ディレクトリを開く関数
 * @param {string} dirPath ファイルパスの引数を渡す
 * 例：'C:\\Users\\koba\\Documents\\'など
 * その分処理の時間を遅らせる。
*/
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

export function readTxt(filePath: string, rootPath: string){
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Failed to read file: ${err}`);
            return;
        }

        // 改行で名前を分割します
        const names = data.split('\r\n');
        for (const name of names) {
            // ディレクトリのフルパスを生成します
            const dirPath = path.join(rootPath, name);

            fs.mkdir(dirPath, { recursive: true }, (err) => {
                if (err) {
                    console.error(`Failed to create directory: ${err}`);
                } else {
                    console.log(`Directory created: ${dirPath}`);
                }
            });
        }
    });
}

