
import { rand, sum, openWebPg, smoothScrollTo} from './common/common.js';
import { switcher, switcher1} from './common/switcher.js';
import { getData, wait } from './common/async.js';
import { back } from './common/generics.js';
import * as fs from 'fs';
import * as path from 'path';

window.TypeScriptStart = () =>{
//この中に処理を書くこと******************************************************************************************************************************************************************
//**************************************************************************************************************************************************************************************

// 動作確認用
//console.log('ok');


// ファイルを作成したいパスを指定
const dirPath = 'C:\\Users\\UserName\\Documents';
const fileName = 'test.txt';

// 完全なファイルパスを作成
const filePath = path.join(dirPath, fileName);

// ファイルの存在チェック
fs.access(filePath, fs.constants.F_OK, (err) => {
    if(err){
        console.log("The file does not exist, creating now...");
        fs.writeFile(filePath, 'Hello, World!', (err) => {
            if (err) {
                return console.log('Error writing file: ' + err);
            }
            console.log('File created successfully!');
        });
    }
    else{
        console.log("The file already exists.");
    }
});

























































































































































































































































































































































































































































































//ここまでに処理を書くこと------------------------------------------------------------------------------------------------------------------
}