import { wait } from './async.js';
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
/**
 * 数値を渡すをとランダムで値を返す
 * @param {number} a, {number} number型の数字を渡す
 * @returns {String} case文に応じて値をconsoleに出力
 *
*/
export function sum(a, b) {
    return a + b;
}
/**
 * 渡された引数のWebのリンクを開く
 * @param {string} url, string型のURLを渡す
 *
*/
export function openWebPg(url) {
    window.open(url, '_blank');
}
/**
 * 開いたWebページをゆっくりスクロールする
 * @param {number} a, {number} number型の数字を渡す
 * @returns {String} case文に応じて値をconsoleに出力
 *
*/
export function ScrollPage() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
    });
}
export async function smoothScrollTo(end, duration) {
    // 処理を5秒間遅らせる
    await wait(5000);
    const start = window.scrollY || window.pageYOffset;
    const change = end - start;
    const startTime = performance.now();
    let reqId;
    function animateScroll(currentTime) {
        const progress = Math.min(1, (currentTime - startTime) / duration);
        window.scrollTo(0, start + change * progress);
        if (progress < 1) {
            reqId = window.requestAnimationFrame(animateScroll);
        }
    }
    reqId = window.requestAnimationFrame(animateScroll);
    return function cancel() {
        window.cancelAnimationFrame(reqId);
    };
}
//# sourceMappingURL=common.js.map