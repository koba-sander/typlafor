
// https://riotz.works/articles/lopburny/2019/08/28/using-typescript-re-export-and-import-syntax-to-improve-module-arrangement/


/**
 * 時間を与える関数
 * @param {number} timeout 1000(1秒)などの引数を渡す
 * その分処理の時間を遅らせる。
*/
function wait(timeout: number): Promise<void> {
    return new Promise<void>((resolve) => setTimeout(resolve, timeout));
}

/**
 * fetchでデータを取って来る関数
 * @param {String} url jsonの形式のURLを渡す
 * @returns {String} dataを返す
 *
*/
async function getData(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}



function TypeScriptStart(){
//この中に処理を書くこと******************************************************************************************************************************************************************
//**************************************************************************************************************************************************************************************


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

function switcher(hoge: number): void{
  const result: string = when(hoge)
  .on((v: number) => v === 1, (): string => "A")
  .on((v: number) => v === 2, (): string => "B")
  .on((v: number) => v === 3, (): string => "C")
  .otherwise((): string => "default")

  console.log(result);
}

switcher(44);



































































//ここまでに処理を書くこと------------------------------------------------------------------------------------------------------------------
}