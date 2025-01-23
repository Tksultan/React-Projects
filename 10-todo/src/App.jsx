import { useState } from "react"
import { Todoprovider } from "./context"
import { useEffect } from "react"
import TodoForm  from "./components/TodoForm"
import TodoItem from "./components/TodoItem"


function App() {
  const [todos, setodos] = useState([])

  const addTodo =(todo)=>{
    setodos((oldTodo)=> [{id: Date.now(), ...todo}, ...oldTodo ])
  }
  
  const updateTodo = (id, todo)=>{
    setodos((prev)=> prev.map((prevTodo)=> (prevTodo.id === id) ? todo : prevTodo))
  }

  const deleteTodo = (id)=>{
    setodos((prev)=> prev.filter((todo)=> todo.id !== id))
  }

  const togglecomplete = (id)=>{
    setodos((prev)=> prev.map((prevtodo)=> prevtodo.id === id ? {...prevtodo, completed: !prevtodo.completed}: prevtodo ))
  }

  useEffect(() => {
   const todos = JSON.parse(localStorage.getItem("todos"))

   if (todos && todos.length > 0) {
    setodos(todos)
  }
  }, [])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  

  return (
    <Todoprovider value={{todos,addTodo,updateTodo,deleteTodo, togglecomplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo)=>(
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Todoprovider>
  )
}

export default App
