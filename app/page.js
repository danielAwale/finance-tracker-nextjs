'use client'
import React, { useState, useEffect } from "react"

export default function Home() {
  const [items, setItems] = useState([
    { name: 'Coffee', price: 4.95 },
    { name: 'Movies', price: 30.00 },
    { name: 'candy', price: 5.95 },
  ]);
  const [total, setTotal] = useState(0);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 p-4">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className='text-4xl p-4 text-center'>Expense Tracker</h1>
        <div className='bg-slate-800 p-4 rounded-lg'>
          <form className='grid grid-cols-6 items-center text-black'>
            <input className='col-span-3 border p-3' type="text" placeholder='Enter Item' />
            <input className='col-span-2 border mx-3 p-3' type="number" placeholder='Enter $' />
            <button className='text-white bg-slate-950 hover:bg-slate-900 p-3 text-xl' type='submit'>+</button>
          </form>
          <ul>
            {items.map((item, id) => (
              <li>
                <div>
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </div>
                <button>X</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
