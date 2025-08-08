import React from 'react'
import { useQuery } from '@tanstack/react-query';

function Posts() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
        res.json()
      ),
      staleTime: 1000 * 60 * 5, // data stays fresh for 5 mins
      refetchOnWindowFocus: true, // refetch when tab is focused
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}


export default Posts
