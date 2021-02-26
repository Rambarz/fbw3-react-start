export default function Todo({todo, index}){
    return (
        <div className="todo-component">
            <p>Todo is: {index+1}</p>
            <p>Todo Text is: {todo.text}</p>
        </div>

    )
}