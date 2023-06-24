import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';

//CallbackをPromiseに変換する
const {
    readdir, rename, readFile, writeFile, mkdir
} = promisifyAll(fs);

function promisifyAll(obj: any) {
    const result: any = {};
    for (const key in obj) {
        if (typeof obj[key] === 'function') {
            result[key] = promisify(obj[key]);
        }
    }
    return result;
}


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



export async function createDirectoriesFromFile(filePath: string, rootPath: string) {
    try {
        const data = await readFile(filePath, 'utf8');

        // 改行で名前を分割します
        const names = data.split('\r\n');
        for (const name of names) {
            // ディレクトリのフルパスを生成します
            const dirPath = path.join(rootPath, name);

            try {
                await mkdir(dirPath, { recursive: true });
                console.log(`Directory created: ${dirPath}`);
            } catch (err) {
                console.error(`Failed to create directory: ${err}`);
            }
        }
    } catch (err) {
        console.error(`Failed to read file: ${err}`);
    }
}



export async function renameFiles(directoryPath: string) {
    try {
        console.log(readdir(directoryPath));
        const files = await readdir(directoryPath);
        let index = 1;
        for(const file of files) {
            const oldPath = path.join(directoryPath, file);
            if(oldPath){
                const newPath = path.join(directoryPath, `${index}_${file}`);
                await rename(oldPath, newPath);
                console.log(`インデックスを追加しました: ${oldPath} -> ${newPath}`);
            } else {
                console.log(`既にインデックスが振られています: ${oldPath}`)
            }
            index++;
        }
    } catch (err) {
        console.error(`インデックス追加に失敗しました。: ${err}`);
    }
}


export async function createFiles(filePath: string, rootPath: string) {
    try {
        const data = await readFile(filePath, 'utf8');
        const names = data.split('\r\n')

        for(const name of names){
            const newFilePath = path.join(rootPath, `${name}.txt`);
            await writeFile(newFilePath, '');
            console.log(`ファイルを生成しました: ${newFilePath}`);
        }
    } catch (err) {
        console.error(`ファイル作成に失敗しました: ${err}`);
    }
}