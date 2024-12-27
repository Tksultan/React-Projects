import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  //let counter = 15

  const addvalue = () => {
    setCounter(counter + 1)
  }

  const removeValue = () =>{
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React Basic App ({counter})</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addvalue}>Add Value</button>{" "}
      <button onClick={removeValue}>Remove value</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
