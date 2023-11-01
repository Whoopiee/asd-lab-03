"use client"

import React, { useState } from 'react';
import { Stack } from './services/Stack';

export default function Home() {
  const [stack, setStack] = useState(new Stack);
  const [addValue, setAddValue] = useState(null);
  const [containValue, setContainValue] = useState(null);

  const handleChangeAddField = (e) => {
    setAddValue(e.target.value);
  }

  const handleChangeContainField = (e) => {
    setContainValue(e.target.value);
  }

  const handleAdd = () => {
    setStack(prev => prev.push(addValue));
  }

  const handleDelete = () => {
    setStack(prev => prev.pop());
  }

  const handleSwap = () => {
    setStack(prev => prev.swapHeadTail());
  }

  const handleReverse = () => {
    setStack(prev => prev.reverse());
  }

  const handleCheck = () => {
    
  }

  const handleDrop = () => {
    
  }

  console.log(stack)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <input onChange={handleChangeAddField} id="add"/>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleSwap}>Swap Head and Tail</button>
      <button onClick={handleReverse}>Reverse</button>
      <input onChange={handleChangeContainField} type="text" id="contain"></input>
      <button>Is contain</button>
      <button>Drop</button>

      {/* {stack.data.map(item => (
        <div className='block'>{item}</div>
      ))} */}
    </main>
  )
}
