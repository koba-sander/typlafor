/**
 * 時間を与える関数
 * @param {number} timeout 1000(1秒)などの引数を渡す
 * その分処理の時間を遅らせる。
*/
export function wait(timeout) {
    return new Promise((resolve) => setTimeout(resolve, timeout));
}
/**
 * fetchでデータを取って来る関数
 * @param {String} url jsonの形式のURLを渡す
 * @returns {String} dataを返す
 *
*/
export async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
