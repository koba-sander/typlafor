import ExcelJS from 'exceljs';
/**
 * excelファイル開く関数
 * @param {string} filePath ファイルパスの引数を渡す
 * 例：'C:\\Users\\koba\\Documents\\＊＊.xlsx'など
 * その分処理の時間を遅らせる。
*/
export async function readExcelFile(filePath) {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    workbook.eachSheet((worksheet, sheetId) => {
        console.log(`Sheet ID: ${sheetId}, Sheet Name: ${worksheet.name}`);
        worksheet.eachRow((row, rowNumber) => {
            console.log(`Row ${rowNumber}: ${row.values}`);
        });
    });
}
