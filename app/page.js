"use client"
import React, { useState } from 'react';
import './globals.css';

export default function Home() {
  let [number, setNumber] = useState(0);

  const increment = () => {
    setNumber((prev) => prev + 1);
  }
  const decrement = () => {
    if (number === 0) {
      alert("Counter cannot be negative");
      return;
    }
    setNumber((prev) => prev - 1);
  }
  const reset = () => {
    setNumber(0);
  }
  return (
    <>
      <main>
        <section className="title">
          <h1>Counter App</h1>
          <p>This is a simple counter app built with React and Next.js.</p>
        </section>
        
        <section className="counter">
          <h2 className="counter-title">Counter</h2>
          <p className="counter-value">{number}</p>
          <section className="counter-controls">
            <button className="action-btn" onClick={increment}>+</button>
            <button className="action-btn" onClick={reset}>Reset</button>
            <button className="action-btn" onClick={decrement}>-</button>
          </section>
        </section>
      </main>
    </>
  );
}