/**
 * 数値を渡すをとランダムで値を返す
 * @param {String} hoge number型の数字を渡す
 * @returns {String} case文に応じて値をconsoleに出力
 *
*/
/**
 * 数値を渡すをとランダムで値を返す
 * @param {String} hoge number型の数字を渡す
 * @returns {String} case文に応じて値をconsoleに出力
 *
*/
export function rand(num) {
    if (typeof num == "string") {
        return "数字(number)を渡してね";
    }
    const randNum = Math.floor(num * Math.random());
    return randNum;
}
