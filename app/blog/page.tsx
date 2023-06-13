import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';

export type BlogType = {
  userId: number
  id: number
  title: string
  body: string
}

export const metadata: Metadata = {
  title: 'Бложики'
}

async function getBlogs() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts',
    {
      next: {
        revalidate: 60
      }
    }
  );

  if(!response.ok) return new Error('Bad request')

  return response.json();
}

const Blog = async () => {
  const posts : BlogType[] = await getBlogs();

  return (
    <div>
      <h1>Бложики</h1>
      <ul>
        {posts.map((post, index) => (
          <Link href={`/blog/${post.id}`} key={post.id * index}>
            <li><strong>{index + 1}.</strong> {post.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Blog;