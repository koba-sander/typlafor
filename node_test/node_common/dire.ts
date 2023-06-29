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
        const files = await readdir(directoryPath);
        let index = 1;
        for(const file of files) {
            const oldPath = path.join(directoryPath, file);
            // 先頭1文字目が数字で、2文字目が'_'だった場合
            // インデックスが既に振られているので、スキップ
            if(isNaN(file[0]) === false && file[1] === '_') {
                console.log(`既にインデックスが振られています: ${oldPath}`);
            } else {
                const newPath = path.join(directoryPath, `${index}_${file}`);
                await rename(oldPath, newPath);
                console.log(`インデックスを追加しました: ${oldPath} -> ${newPath}`);
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


export async function checkAndOpenFile(directoryPath: string, targetFileName: string) {
    try {
        const files = await readdir(directoryPath);

        if (files.includes(targetFileName)) {
            const targetFilePath = path.join(directoryPath, targetFileName);
            const fileContent = await readFile(targetFilePath, 'utf8');
            console.log(`File content of ${targetFileName}:`);
            console.log(fileContent);
        } else {
            console.log(`${targetFileName} does not exist in ${directoryPath}. Exiting.`);
            process.exit(0);
        }
    } catch (err) {
        console.error(`Failed to read directory or file: ${err}`);
    }
}

export async function openDir(directoryPath: string, target){
    try {

    } catch (err){
        console.error(`開くのに失敗した: ${err}`)
    }
}