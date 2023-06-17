import { wait } from './async.js';

/**
 * 数値を渡すをとランダムで値を返す
 * @param {String} hoge number型の数字を渡す
 * @returns {String} case文に応じて値をconsoleに出力
 *
*/
export function rand(num: number | string): number | string{
  if(typeof num == "string" ){
    return "数字(number)を渡してね"
  }
  const randNum = Math.floor(num * Math.random())
  return randNum;
}

/**
 * 数値を渡すをとランダムで値を返す
 * @param {number} a, {number} number型の数字を渡す
 * @returns {String} case文に応じて値をconsoleに出力
 *
*/
export function sum(a: number, b: number): number {
  return a + b;
}


/**
 * 渡された引数のWebのリンクを開く
 * @param {string} url, string型のURLを渡す
 *
*/
export function openWebPg(url: string): void {
  window.open(url, '_blank');
}

/**
 * 開いたWebページをゆっくりスクロールする
 * @param {number} a, {number} number型の数字を渡す
 * @returns {String} case文に応じて値をconsoleに出力
 *
*/
export function ScrollPage(): void {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior:'smooth',

  });
}

export async function smoothScrollTo(end: number, duration: number) {
  // 処理を5秒間遅らせる
  await wait(5000);

  const start: number = window.scrollY || window.pageYOffset;
  const change: number = end - start;
  const startTime: number = performance.now();
  let reqId: number;

  function animateScroll(currentTime: number) {
      const progress: number = Math.min(1, (currentTime - startTime) / duration);
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
