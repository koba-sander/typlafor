import * as path from 'path';
import { openDir } from './node_common/dire.js';
const dirPath = path.resolve('C:\\Users\\koba\\Documents'); // 開きたいディレクトリのパス
openDir(dirPath);
// // ファイルを作成したいパスを指定
// const dirPath = 'C:\\Users\\koba\\Documents';
// const fileName = 'test.txt';
// // 完全なファイルパスを作成
// const filePath = path.join(dirPath, fileName);
// // ファイルの存在チェック
// fs.access(filePath, fs.constants.F_OK, (err) => {
//     if(err){
//         console.log("The file does not exist, creating now...");
//         fs.writeFile(filePath, 'Hello, World!', (err) => {
//             if (err) {
//                 return console.log('Error writing file: ' + err);
//             }
//             console.log('File created successfully!');
//         });
//     }
//     else{
//         console.log("The file already exists.");
//     }
// });
