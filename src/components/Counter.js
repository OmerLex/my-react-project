import React from 'react'
import { useState } from 'react';

export default function Counter() {
    const [counter, setCounter] = useState(0);

    const handleClick1 = () => {
        setCounter(counter + 1);
    }

    const handleClick2 = () => {
        setCounter(counter - 1);        
    }

  return (
    <div>
        <h1>Counter App</h1>
        <button onClick={handleClick2}>Decreament</button>
        <div style={{fontSize:50}}>{counter}</div>
        <button onClick={handleClick1}>Increament-1</button>

        <button onClick={() => setCounter(counter + 1)}>Increament-2</button>

    </div>
  )
}
