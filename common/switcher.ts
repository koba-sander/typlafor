
/**
 * このコードは、条件分岐を行うための関数 `when` を定義しています。 `when` 関数は、数値 `value` を受け取り、以下の2つのメソッドを持つオブジェクトを返します。
 *
 * 1. `on` メソッド：条件分岐を行います。引数として、条件を判定するための関数 `predicate` と、条件が真であった場合に実行する関数 `fn` を取ります。 `on` メソッドは、条件が真の場合、オブジェクトを返します。このオブジェクトには、`on` メソッドが再度呼び出されることで、新しい条件分岐を追加することができます。また、条件が偽であった場合、`otherwise` メソッドを呼び出します。
 *
 *
 *
 * 2. `otherwise` メソッド：引数として、条件分岐を追加しなかった場合に実行する関数 `fn` を取ります。このメソッドは、常に引数で渡された関数を実行し、その戻り値を返します。
 *
 * `on` メソッドと `otherwise` メソッドの両方がチェーン可能であり、同じ `value` を引き継ぎます。 `when` 関数を使用すると、単純な条件分岐をより読みやすく、チェーン可能な方法で表現できます。
 *
 * @param {String} hoge number型の数字を渡す
 * @returns {String} case文に応じて値をconsoleに出力
 *
*/
function when(value: number) {
    return {
        on(predicate: any, fn: any) {
            if (predicate(value)) {
                return {
                on: this.on,
                otherwise: () => fn(value),
                };
            }
            return this;
        },
        otherwise(fn: any) {
            return fn(value);
        },
    };
}


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
export function switcher(hoge: number, coOrRe: "console" | "return"): string | void {
    const result: string = when(hoge)
        .on((v: number) => v === 1, (): string => "A")
        .on((v: number) => v === 2, (): string => "B")
        .on((v: number) => v === 3, (): string => "C")
        .otherwise((): string => "default")
    if(coOrRe == "console"){
        console.log(result);
    }
    return result;
}


export function switcher1(hoge: number): void{
    const result: string | number | string[] = when(hoge)
  .on((v: number) => v === 1, (): string   => "A")
  .on((v: number) => v === 2, (): boolean  => true)
  .on((v: number) => v === 3, (): string[] => ["aaa", "bbb"])
  .otherwise((): string => "default");
    console.log(result);
}