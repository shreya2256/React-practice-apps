
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UserList from './components/UserList';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ]),
  })
);

test('displays list of users after fetch', async () => {
  render(<UserList />);

  await waitFor(() => {
    const users = screen.getAllByTestId('user');
    expect(users.length).toBe(2);
    expect(users[0]).toHaveTextContent('Alice');
    expect(users[1]).toHaveTextContent('Bob');
  });
});
