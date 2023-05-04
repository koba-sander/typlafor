
/**
 * Switch文
 * @param {String} url jsonの形式のURLを渡す
 * @returns {String} dataを返す
 *
*/
interface PredicateFunction<T> {
    (value: T): boolean;
}

interface ResultFunction<T, R> {
    (value: T): R;
}

interface WhenObject<T> {
    on<R>(predicate: PredicateFunction<T>, fn: ResultFunction<T, R>): WhenObject<T>;
    otherwise<R>(fn: ResultFunction<T, R>): R;
}

function when<T>(value: T): WhenObject<T> {
    return {
        on<R>(predicate: PredicateFunction<T>, fn: ResultFunction<T, R>): WhenObject<T> | R {
        if (predicate(value)) {
            return {
            on,
            otherwise: () => fn(value),
            };
        }
        return this;
        },
        otherwise<R>(fn: ResultFunction<T, R>): R {
        return fn(value);
        },
    };
}


const hoge:number = 1

const result: string = when(hoge)
.on((v: number) => v === 1, (): string => "A")
.on((v: number) => v === 2, (): string => "B")
.on((v: number) => v === 3, (): string => "C")
.otherwise((): string => "default")

console.log(result);