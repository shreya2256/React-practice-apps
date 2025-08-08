
import './App.css'
import React from 'react';
import { sum } from './utils/sum';

//Unit Testing with Jest
//Topics to be cover is:
// Testing in React
// -	Unit testing with Jest
// -	React Testing Library (RTL)



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

// check all the files neatly to run the application
// What is Jest?
// Jest is a JavaScript testing framework maintained by Meta.
// Used for:
// Unit testing
// Mocking functions
// Snapshot testing
// ✅ Already included if you created the app with CRA (create-react-app)

// 🔹 2. What is React Testing Library (RTL)?
// RTL is used to test React components the way users would interact with them — clicking buttons, filling inputs, reading text, etc.
//to run this application we need to install this in terminal as 

//npm install --save-dev jest @testing-library/react @testing-library/jest-dom babel-jest @babel/preset-env @babel/preset-react identity-obj-proxy

//optional
//npm install --save-dev babel-jest @babel/preset-env @babel/preset-react

//type this in terminal
//npm test

//output will be shown as :
// C:\Users\shreya\Desktop\React JS\Practice\33-ReactJestExample>npm test
// > 33-reactjestexample@0.0.0 test
// > jest
//  PASS  src/utils/sum.test.js
//   √ adds numbers correctly (3 ms)                                                                                                   
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.834 s
// Ran all test suites.



