interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  async function fetchPosts(): Promise<Post[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  }

  async function processPosts(posts: Post[]): Promise<void> {
    console.log(`Received ${posts.length} posts`);
    posts.forEach((post) => {
      console.log(`Post ${post.id}: ${post.title}`);
    });
  }

  async function main(){
    console.log("Start");

    const posts = await fetchPosts();
    await processPosts(posts);

    console.log("End")
  }


  main();