
export function TodoItem({ isItCompleted, id, title, toggleTodo, deleteTodo }) {
    return (
        <li>
            <label>
            <input type="checkbox" 
            checked={isItCompleted} 
            onChange={event => toggleTodo(id, event.target.checked)} />
            {title}
            </label>
            <button 
            onClick={() => deleteTodo(id)} 
            className="btn btn-danger">Delete</button>
        </li>
    )
}