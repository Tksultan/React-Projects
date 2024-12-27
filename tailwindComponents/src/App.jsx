import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  return(
  <>
    <h1 className='text-3xl bg-green-500 rounded-md '>Tailwind with react</h1>
    <Card username="tks" post="staff"/>
    <Card username="tejas"/>
    <Card />
  </>
  )
}

export default App
