import { switcher } from "./switcher.js";

/**
 * ジェネリクス
 * @param {T} arg
 * 渡したらジェネリクスを使って返す
 * 例
 *
 * "test<number>(1); //=> 1"
 *
 * "test<string>("文字列"); //=> 文字列"
*/
export function back<T>(arg: T): T {
    return arg;
}


export function back3<T, U, P>(arg1: T, arg2: U, arg3: P): T | U | P {
    // switcher()
}