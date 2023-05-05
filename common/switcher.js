/**
 * このコードは、switcherという関数をエクスポートしています。この関数は、hogeという数値を引数として受け取り、それに応じて異なる文字列を出力します。
 *
 * 関数whenは、値を判定し、複数の条件に基づいて異なる値を返すという処理を行うための関数です。onメソッドは、引数に条件を表す関数と、条件に一致した場合に返す値を指定します。otherwiseメソッドは、条件に一致しなかった場合に実行する関数を指定します。
 *
 * switcher関数では、when関数を使って、hogeに応じた異なる値を返す処理が行われます。when関数は、条件によって異なる文字列を返すため、result変数には文字列型の値が入ります。最後に、console.logを使って、result変数の値を出力しています。
 *
 * なお、関数whenはswitcher関数の中でのみ使用されているため、exportキーワードはswitcher関数に付けられているということになります。
 * @param {String} hoge number型の数字を渡す
 * @returns {String} case文に応じて値をconsoleに出力
 *
*/
export function switcher(hoge, coOrRe) {
    const result = when(hoge)
        .on((v) => v === 1, () => "A")
        .on((v) => v === 2, () => "B")
        .on((v) => v === 3, () => "C")
        .otherwise(() => "default");
    if (coOrRe == "console") {
        console.log(result);
    }
    return result;
}
function when(value) {
    return {
        on(predicate, fn) {
            if (predicate(value)) {
                return {
                    on: this.on,
                    otherwise: () => fn(value),
                };
            }
            return this;
        },
        otherwise(fn) {
            return fn(value);
        },
    };
}
