import React from 'react';
import { BlogType } from '../page';

type Props = {
  params: {
    id: string
  }
}

async function getPost(postId: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

  return response.json();
}

const Post = async (props: Props) => {
  const post: BlogType = await getPost(props.params.id)

  return (
    <div>
      <h1><strong>{post.title}</strong></h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;