
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UserList from '../components/UserList';

// 👇 mock fetch globally
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ]),
  })
);

test('displays user list after API call', async () => {
  render(<UserList />);

  // Wait for list to appear
  const items = await waitFor(() => screen.getAllByTestId('user-item'));
  expect(items).toHaveLength(2);
  expect(items[0]).toHaveTextContent('Alice');
  expect(items[1]).toHaveTextContent('Bob');
});
