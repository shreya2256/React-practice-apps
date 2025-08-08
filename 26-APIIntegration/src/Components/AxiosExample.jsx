// AxiosExample.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosExample = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setUsers(response.data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div className="p-4">
      <h2>Axios Example</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {users.slice(0, 5).map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AxiosExample;
