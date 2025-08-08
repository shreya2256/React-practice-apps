import React from 'react'
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Profile() {
  const { data, error, isLoading } = useSWR('/api/profile', fetcher);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load</p>;

  return <div>Welcome {data.name}</div>;
}

export default Profile
