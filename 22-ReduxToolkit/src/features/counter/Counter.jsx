// src/features/counter/Counter.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';

function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Redux Toolkit Counter</h2>
      <h1>{count}</h1>
      <button 
      className='bg-cyan-500 shadow-lg shadow-cyan-500/50 text-3xl text-white text-center rounded-xl p-3'
      onClick={() => dispatch(increment())}>+ Increment</button>
      <br/>
      <br/>
      <button 
      className='bg-cyan-500 shadow-lg shadow-cyan-500/50 text-3xl text-white text-center rounded-xl p-3'
      onClick={() => dispatch(decrement())}>- Decrement</button>
      <br/>
      <br/>
      <button 
      className='bg-cyan-500 shadow-lg shadow-cyan-500/50 text-3xl text-white text-center rounded-xl p-3'
      onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default Counter;
