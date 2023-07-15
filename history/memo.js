"use strict";
//この中に処理を書くこと******************************************************************************************************************************************************************
//**************************************************************************************************************************************************************************************
// const num = rand(55);
async function fetchPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
}
async function processPosts(posts) {
    console.log(`Received ${posts.length} posts`);
    posts.forEach((post) => {
        console.log(`Post ${post.id}: ${post.title}`);
    });
}
async function main() {
    console.log("Start");
    const posts = await fetchPosts();
    await processPosts(posts);
    console.log("End");
}
main();
//# sourceMappingURL=memo.js.map