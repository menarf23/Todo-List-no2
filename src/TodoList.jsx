import { TodoItem } from "./TodoItem"

export function TodoList(props) {
  return (
    <ul className="list">
      {props.todoList.length === 0 && "No Todos"}
      {props.todoList.map(todo => {
        return (
          <TodoItem
            id={todo.id}
            isItCompleted={todo.isItCompleted}
            title={todo.title}
            key={todo.id}
            toggleTodo={props.toggleTodo}
            deleteTodo={props.deleteTodo}
          />
        )
      })}
    </ul>
  )
}
