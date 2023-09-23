import { TodoItem } from "./TodoItem"

export function TodoList({ todoList, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todoList.length === 0 && "No Todos"}
      {todoList.map(todo => {
        return (
          <TodoItem
            id={todo.id}
            isItCompleted={todo.isItCompleted}
            title={todo.title}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
  )
}
