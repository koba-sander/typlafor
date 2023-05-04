
function switcher(hoge: number): void{
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
  const result: string = when(hoge)
  .on((v: number) => v === 1, (): string => "A")
  .on((v: number) => v === 2, (): string => "B")
  .on((v: number) => v === 3, (): string => "C")
  .otherwise((): string => "default")

  console.log(result);
}