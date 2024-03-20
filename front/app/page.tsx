import { FC } from 'react';

type Post = {
  id: number;
  title: string;
};

async function getPost() {
  const res = await fetch('http://back:3000/posts', { cache: "no-store" });

  if (!res.ok) {
    throw new Error('Failed to fetch Post');
  }

  return res.json();
}

const Home: FC = async () => {
  const posts: Post[] = await getPost();
  console.log(posts);
  return (
    <div >
      <h1>API test</h1>
      <h1>Post List</h1>
      {posts.map((post) => (
        <p key={post.id}>
          {post.title}
        </p>
      ))}
    </div>
  );
};

export default Home;