"use strict";
function when(value) {
    return {
        on(predicate, fn) {
            if (predicate(value)) {
                return {
                    on,
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
const hoge = 1;
const result = when(hoge)
    .on((v) => v === 1, () => "A")
    .on((v) => v === 2, () => "B")
    .on((v) => v === 3, () => "C")
    .otherwise(() => "default");
console.log(result);
