import common from "./common/common";

//時間を与える関数
function wait(timeout: number): Promise<void> {
    return new Promise<void>((resolve) => setTimeout(resolve, timeout));
}

function TypeScriptStart(){
//この中に処理を書くこと------------------------------------------------------------------------------------------------------------------

interface User{
    id: number;
    name: string;
    email: string;
}

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

async function fetchUser(userId: number): Promise<User> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
    const user = await response.json();
    return user;
}





async function main(){
    console.log("START");
    await wait(3000);
    const userId = 1;
    const user = await fetchUser(userId);
    console.log(user);
}

main()












































//ここまでに処理を書くこと------------------------------------------------------------------------------------------------------------------
}