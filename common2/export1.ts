export const add = (num1, num2) => {
    return num1 + num2;
};
export const minus = (num1, num2) => {
    return num1 - num2;
};


export function when(value: number) {
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

export function switcher(hoge: number): void{
    const result: string = when(hoge)
        .on((v: number) => v === 1, (): string => "A")
        .on((v: number) => v === 2, (): string => "B")
        .on((v: number) => v === 3, (): string => "C")
        .otherwise((): string => "default")

    console.log(result);
}