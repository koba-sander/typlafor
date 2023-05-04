
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




switcher(44);



































































//ここまでに処理を書くこと------------------------------------------------------------------------------------------------------------------
}