
export function TodoItem(props) {
    return (
        <li>
            <label>
            <input type="checkbox" 
            checked={props.isItCompleted} 
            onChange={event => props.toggleTodo(props.id, event.target.checked)} />
            {props.title}
            </label>
            <button 
            onClick={() => props.deleteTodo(props.id)} 
            className="btn btn-danger">Delete</button>
        </li>
    )
}