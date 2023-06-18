import ExcelJS from 'exceljs';

export async function readExcelFile(filePath: string) {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);

    workbook.eachSheet((worksheet, sheetId) => {
        console.log(`Sheet ID: ${sheetId}, Sheet Name: ${worksheet.name}`);
        worksheet.eachRow((row, rowNumber) => {
            console.log(`Row ${rowNumber}: ${row.values}`);
        });
    });
}