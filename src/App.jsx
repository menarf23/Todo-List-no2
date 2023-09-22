import { useEffect, useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

export default function App(props) {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect (() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [...currentTodos, { id: crypto.randomUUID(), title, isItCompleted: false }]
    })
  }

  function toggleTodo(itemID, isItCompleted) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === itemID) {
          return { ...todo, isItCompleted }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
    <NewTodoForm onSubmit={addTodo} />
    <h1 className="header">Todo List</h1>
    <TodoList todoList={todos}
    toggleTodo={toggleTodo} 
    deleteTodo={deleteTodo}
    />
    </>
  )
}