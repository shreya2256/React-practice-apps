import { useEffect, useState } from 'react';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Users:</h1>
      <ul data-testid="user-list">
        {users.map((user) => (
          <li key={user.id} data-testid="user">{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
