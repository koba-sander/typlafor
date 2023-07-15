"use strict";
class Delighters {
    dels = [];
    options = {
        attribute: 'data-delighter',
        classNames: ['delighter', 'started', 'ended'],
        start: 0.75,
        end: 0.75,
        autoInit: true
    };
    constructor() {
        document.addEventListener("DOMContentLoaded", () => {
            if (this.options.autoInit)
                this.init();
        });
    }
    config(opts) {
        this.options = { ...this.options, ...opts };
    }
    init() {
        document.addEventListener('scroll', () => this.scroll());
        let els = document.querySelectorAll(`[${this.options.attribute}]`);
        for (let i = 0; i < els.length; i++) {
            let el = els[i], def = el.getAttribute(this.options.attribute), pairs = def.split(';'), del = { el, id: this.dels.length, start: this.options.start, end: this.options.end };
            for (let j = 0; j < pairs.length; j++) {
                let pair = pairs[j].split(':'), name = pair[0], val = isNaN(Number(pair[1])) ? pair[1] : Number(pair[1]);
                if (name)
                    del[name] = (val === undefined) ? true : val;
            }
            this.dels.push(del);
            el.classList.add(this.options.classNames[0]);
            if (del.debug)
                el.setAttribute('style', 'outline: solid red 4px');
        }
        this.scroll();
    }
    scroll() {
        let viewportHeight = window.innerHeight;
        for (let i = 0; i < this.dels.length; i++) {
            let del = this.dels[i], box = del.el.getBoundingClientRect(), factorStart = box.top / viewportHeight, factorEnd = box.bottom / viewportHeight;
            if (del.debug) {
                if (factorStart >= 0 && factorStart <= 1) {
                    if (!del.startLine) {
                        del.startLine = document.createElement('div');
                        document.body.appendChild(del.startLine);
                        del.startLine.setAttribute('style', 'position:fixed;height:0;width:100%;border-bottom:dotted red 2px;top:' + (del.start * 100) + 'vh');
                    }
                }
                if (((factorEnd < del.end) || (factorStart > 1)) && del.startLine) {
                    del.startLine.parentNode.removeChild(del.startLine);
                    delete del.startLine;
                }
            }
            if (factorStart < del.start && !del.started) {
                del.started = true;
                del.el.classList.add(this.options.classNames[1]);
            }
            else if (factorStart > del.start && del.started) {
                del.started = false;
                del.el.classList.remove(this.options.classNames[1]);
            }
            if (factorEnd < del.end && !del.ended) {
                del.ended = true;
                del.el.classList.add(this.options.classNames[2]);
            }
            else if (factorEnd > del.end && del.ended) {
                del.ended = false;
                del.el.classList.remove(this.options.classNames[2]);
            }
        }
    }
}
let delighters = new Delighters();
//# sourceMappingURL=delighters.js.map