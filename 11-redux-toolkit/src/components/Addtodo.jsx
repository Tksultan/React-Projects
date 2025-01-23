import React, { useState } from 'react'

import {useDispatch} from 'react-redux'

import {addtodo, removetodo} from '../Features/todo/todoslice'

function Addtodo() {

  const [input , setInput] = useState('')

  const dispatch = useDispatch()

  const addTodoHandler = (e)=>{
    e.preventDefualt()
    dispatch(addtodo(input))
    setInput('')
  }

  return (
    <form  onSubmit={addTodoHandler} className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 px-3 outline-none duration-150 bg-white/20 py-1.5 rounded-l-full"
              value={input}
              onChange={(e)=>setInput(e.target.value)}
          />
          <button type="submit" className="rounded-r-full px-5 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  )
}

export default Addtodo