import { openDir, readTxt } from './node_common/dire.js';
import { readExcelFile } from './node_common/excel.js';


// const filePath: string = 'C:\\Users\\koba\\Documents\\＊＊.xlsx';
// readExcelFile(filePath);


const filePath: string = 'C:\\Projects\\AApp\\typlafor\\node_test\\textfile\\test.txt';
const rootPath: string = 'C:\\Projects\\AApp\\typlafor\\node_test\\dirPlace';


readTxt(filePath, rootPath);