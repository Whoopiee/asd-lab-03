"use client"

import React, { useEffect, useState } from 'react';
import { Stack } from './services/Stack';
import { v4 as uuid } from 'uuid';

import './page.css'

export default function Home() {
  const [stack, setStack] = useState(new Stack); // створення Стеку та збереження його стану

  // змінні поля нового елементу Стеку та елементу для пошуку з функціями зміни стану
  const [addValue, setAddValue] = useState(null);
  const [containValue, setContainValue] = useState(null);

  // локальний стан для відслідковування змін стеку (поганий тон, 
  // але потрібно для ререндеру сторінки при будь-якій дії зі стеком)
  const [stackChanges, setStackChanges] = useState([]);

  // змінна для відстеження наявності елемента в Стеку під час пошуку
  const [isFound, setIsFound] = useState(undefined);


  // функція для обробки змін в полях input
  const handleChangeAddField = (e) => {
    setAddValue(e.target.value);
  }

  const handleChangeContainField = (e) => {
    setContainValue(e.target.value);
  }

  // функції для обробки дій над стеком
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

  return (
    <main className="flex min-h-screen md:flex-row flex-col items-center justify-between p-24">
      <div className='md:w-3/6 w-screen h-fit m-4 flex flex-wrap flex-row'>
        {stack.data.map(item => (
          <div key={uuid()} className='w-fit h-fit px-7 py-5 m-2 bg-orange-600'>{item}</div>
        ))}
      </div>
      <div className='md:w-2/5 w-screen flex flex-row m-4 items-center gap-5 flex-wrap justify-center'>
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
