
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
type Post = {
  id: number;
  title: string;
};

async function getPosts() {
  const res = await fetch('http://back:3000/posts', { cache: "no-store" });

  if (!res.ok) {
    throw new Error('Failed to fetch Post');
  }

  return res.json();
}

const Home: FC = async () => {
  const posts: Post[] =  await getPosts();
  return (
    <div >
      <h1>Post List</h1>
      <Link href={"/account"}>アカウント登録ページへ</Link>
      <Link href={"/accountlist"}>アカウントリストページへ</Link>
      {posts && posts.map((post) => (
        <p key={post.id}>
          {post.title}
        </p>
      ))}
    </div>
  );
  
};

export default Home;