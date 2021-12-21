import React, {useState} from "react";

export default function Panel(props) {
    const [todo, setTodo] = useState('')

    const ChangeHandler = (event) => {
        setTodo(event.target.value)
    }

    const SubmitHandler = () => {
        if (todo.length) {
            props.addItem(todo)
            setTodo('')
        }
    }

    return (
        <>
            <input type="text" onChange={ChangeHandler} value={todo}/>
            <button onClick={SubmitHandler}>Add</button>
        </>
    )
}
