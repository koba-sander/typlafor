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
export function back(arg) {
    return arg;
}
