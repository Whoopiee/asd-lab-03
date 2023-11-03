"use client"

import React, { useEffect, useState } from 'react';
import { Stack } from './services/Stack';
import { v4 as uuid } from 'uuid';

import './page.css'

export default function Home() {
  const [stack, setStack] = useState(new Stack);
  const [addValue, setAddValue] = useState(null);
  const [containValue, setContainValue] = useState(null);
  const [stackChanges, setStackChanges] = useState([]); // Локальний стан для відслідковування змін стеку
  const [isFound, setIsFound] = useState(undefined);

  const handleChangeAddField = (e) => {
    setAddValue(e.target.value);
  }

  const handleChangeContainField = (e) => {
    setContainValue(e.target.value);
  }

  const handleAdd = () => {
    stack.push(addValue);
    setStack(stack);
    setStackChanges([...stack.getStack()]);
  }

  const handleDelete = () => {
    stack.pop();
    setStack(stack);
    setStackChanges([...stack.getStack()]);
  }

  const handleSwap = () => {
    stack.swapHeadTail();
    setStack(stack);
    setStackChanges([...stack.getStack()]);
  }

  const handleReverse = () => {
    stack.reverse();
    setStack(stack);
    setStackChanges([...stack.getStack()]);
  }

  const handleCheck = () => {
    setIsFound(stack.isContain(containValue))
  }

  const handleDrop = () => {
    stack.clear();
    setStack(stack);
    setStackChanges([...stack.getStack()]);
  }

  console.log(stack)

  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24">
      <div className='w-3/6 border h-96 m-4 flex flex-wrap flex-row'>
        {stack.data.map(item => (
          <div key={uuid()} className='w-fit h-fit px-7 py-5 m-2 bg-orange-600'>{item}</div>
        ))}
      </div>
      <div className='w-2/5 flex flex-row m-4 items-center gap-5 flex-wrap justify-center'>
        <div className='border p-3 flex flex-col gap-3 items-center'>
          <input onChange={handleChangeAddField} placeholder="Enter item to add" className='text-black' id="add" />
          <button onClick={handleAdd} className='border-2 p-1'>Add</button>
        </div>
        <div className='border p-3 flex flex-col gap-3 items-center'>
          <input onChange={handleChangeContainField} placeholder="Enter item to find" className='text-black' type="text" id="contain"></input>
          {isFound === true ? <p className='text-green-600'>Знайдено</p> : (isFound === false ? <p className='text-red-600'>Не знайдено</p> : '')}
          <button onClick={handleCheck} className='border-2 p-1 w-2/5'>Is contain</button>
        </div>
        <div className='border p-3 flex flex-col gap-3 items-center'>
          <button onClick={handleDelete} className='border-2 p-1'>Delete</button>
          <button onClick={handleSwap} className='border-2 p-1'>Swap Head and Tail</button>
          <button onClick={handleReverse} className='border-2 p-1'>Reverse</button>
          <button onClick={handleDrop} className='border-2 p-1'>Drop</button>
        </div>
      </div>

    </main>
  )
}
