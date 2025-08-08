import './App.css'
import React from 'react';
import { sum } from './utils/sum';

function App() {
  const result = sum(10, 5);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to React + Vite + Jest</h1>
      <p>Sum of 10 and 5 is: <strong>{result}</strong></p>
    </div>
  );
}

export default App;
