export const add = (num1, num2) => {
    return num1 + num2;
};
export const minus = (num1, num2) => {
    return num1 - num2;
};
export function when(value) {
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
export function switcher(hoge) {
    const result = when(hoge)
        .on((v) => v === 1, () => "A")
        .on((v) => v === 2, () => "B")
        .on((v) => v === 3, () => "C")
        .otherwise(() => "default");
    console.log(result);
}
