/*
	Delighters - Add CSS animations to delight users as they scroll down.
	(c) 2018 - Q42
	Written by Martin Kool
	https://github.com/Q42/delighters

    Webページの特定の要素がビューポート（ユーザーがブラウザで現在見ている領域）に入ったり出たりしたときに、
    それらの要素に特定のCSSクラスを追加または削除する機能を提供するDelightersクラスを定義しています。
    これにより、スクロールによるアニメーションや他の視覚効果を実装することが可能になります。

詳細な解説は次の通りです：

DelTypeおよびOptionsTypeという2つの型が定義されています。これらはDelightersクラスで使用するデータ構造を表現しています。
DelTypeは個々の要素とその設定を表現し、OptionsTypeは全体的な設定を表現しています。

Delightersクラスが定義されています。このクラスは、要素に対する操作と設定を管理します。

コンストラクタで、DOMContentLoadedイベントリスナーを設定しています。ページが完全に読み込まれたときに、
init関数が自動的に実行されます（autoInitオプションがtrueである場合）。

config関数は新たな設定オプションを受け取り、現在の設定にマージします。この関数は
Partial<OptionsType>型のオブジェクトを受け取り、その型はOptionsTypeのすべての
プロパティがオプションであることを表現します。つまり、一部の設定だけを変更することが可能です。

init関数では、すべてのdelighter要素（特定の属性を持つ要素）を見つけて、それらの情報
をdels配列に保存します。さらに、それぞれの要素に初期クラスを追加します。この関数は
ページが読み込まれたとき、または手動で呼び出されることによって、要素を初期化します。

scroll関数は、スクロールイベントのたびに呼び出されます。ビューポート内での要素の位置
に基づいて、それぞれの要素に対して特定のクラスを追加または削除します。これにより、
要素がビューポート内に入ったり出たりしたときにCSSアニメーションをトリガーすることができます。

最後に、Delightersクラスのインスタンスを作成しています。このインスタンスを使用して、
要素の初期化や設定の変更を行うことができます。
*/
type OptionsType = {
    attribute: string,
    classNames: string[],
    start: number,
    end: number,
    autoInit: boolean,
};

type DelType = {
    el: Element,
    id: number,
    start: number,
    end: number,
    debug?: boolean,
    started?: boolean,
    ended?: boolean,
    startLine?: HTMLDivElement
};

class Delighters {
    private dels: DelType[] = [];

    private options: OptionsType = {
        attribute: 'data-delighter',
        classNames: ['delighter', 'started', 'ended'],
        start: 0.75,
        end: 0.75,
        autoInit: true
    };

    constructor() {
        document.addEventListener("DOMContentLoaded", () => {
            if (this.options.autoInit) this.init();
        });
    }

    config(opts: Partial<OptionsType>): void {
        this.options = { ...this.options, ...opts };
    }

    init(): void {
        document.addEventListener('scroll', () => this.scroll());

        let els: NodeListOf<Element> = document.querySelectorAll(`[${this.options.attribute}]`);

        for (let i=0; i<els.length; i++) {
            let el = els[i],
                def = el.getAttribute(this.options.attribute)!,
                pairs = def.split(';'),
                del: DelType = { el, id: this.dels.length, start: this.options.start, end: this.options.end };

            for (let j=0; j<pairs.length; j++) {
                let pair = pairs[j].split(':'),
                    name = pair[0],
                    val = isNaN(Number(pair[1]))? pair[1] : Number(pair[1]);
                if (name) (del as any)[name] = (val === undefined)? true : val;
            }

            this.dels.push(del);
            el.classList.add(this.options.classNames[0])
            if (del.debug) el.setAttribute('style', 'outline: solid red 4px');
        }
        this.scroll();
    }

    scroll(): void {
        let viewportHeight = window.innerHeight;
        for (let i=0; i<this.dels.length; i++) {
            let del = this.dels[i],
                box = del.el.getBoundingClientRect(),
                factorStart = box.top / viewportHeight,
                factorEnd = box.bottom / viewportHeight;

            if (del.debug) {
                if (factorStart >= 0 && factorStart <= 1) {
                    if (!del.startLine) {
                        del.startLine = document.createElement('div')
                        document.body.appendChild(del.startLine);
                        del.startLine.setAttribute('style', 'position:fixed;height:0;width:100%;border-bottom:dotted red 2px;top:' + (del.start * 100) + 'vh');
                    }
                }
                if (((factorEnd < del.end) || (factorStart > 1)) && del.startLine) {
                    del.startLine.parentNode!.removeChild(del.startLine);
                    delete del.startLine;
                }
            }
            if (factorStart < del.start && !del.started) {
                del.started = true;
                del.el.classList.add(this.options.classNames[1])
            }
            else if (factorStart > del.start && del.started) {
                del.started = false;
                del.el.classList.remove(this.options.classNames[1])
            }
            if (factorEnd < del.end && !del.ended) {
                del.ended = true;
                del.el.classList.add(this.options.classNames[2])
            }
            else if (factorEnd > del.end && del.ended) {
                del.ended = false;
                del.el.classList.remove(this.options.classNames[2])
            }
        }
    }
}

let delighters = new Delighters();
