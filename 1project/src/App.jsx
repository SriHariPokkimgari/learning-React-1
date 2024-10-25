import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter] = useState(0);
  
  const add =()=>{
    setCounter(++counter);
  }
  const remove =()=>{
    setCounter(--counter);
  }
  return (
    <>
      <h1>Counter { counter }</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={add}>Add value</button>
      <button onClick={remove}>Remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
