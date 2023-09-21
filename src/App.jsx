import { useState } from "react"

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(event) {
    event.preventDefault()

    setTodos(currentTodos => {
      return [...currentTodos, { id: crypto.randomUUID(), title: newItem, isItCompleted: false }]
    })

    setNewItem("")
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
    <form onSubmit={handleSubmit} className="new-item-form" >
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input 
        value={newItem} 
        onChange={event => setNewItem(event.target.value)} 
        type="text" 
        id="item" 
        />
      </div>
      <button className="btn">Add</button>
    </form>
    <h1 className="header">Todo List</h1>
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map(todo => {
        return (
          <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.isItCompleted} onChange={event => toggleTodo(todo.id, event.target.checked)} />
              {todo.title}
            </label>
            <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
          </li>
        )
      })}

    </ul>
    </>
  )
}