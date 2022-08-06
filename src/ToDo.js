import remov from './remove.png'
function ToDo({todo, removeTask, toggleTask}) {
    return(
        <div key={todo.key} className='item-todo'>
            <div className={todo.completed ? 'item-text strike' : 'item-text'}
                onClick = {() => toggleTask(todo.id)}
            >
                {todo.task}
            </div>
            <div className="item-delete" onClick={() => removeTask(todo.id)}>
                <img src={remov}></img>
            </div>
        </div>
    )
}

export default ToDo;