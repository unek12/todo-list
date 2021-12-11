import React, {useState} from "react";

export default function AddInput(props) {
    const [todo, setTodo] = useState('')
    const ChangeHandler = (e) => {
        setTodo(e.target.value)
    }
    const addItemOnPressEnter = (e) => {
        if (e.key === 'Enter' && todo.length) {
            props.addItem()(todo)
            setTodo('')
        }
    }
    return (
        <div className='input'>
            <input type="text" onChange={ChangeHandler} value={todo} onKeyPress={addItemOnPressEnter}/>
            <button onClick={() => {
                props.addItem()(todo)
                setTodo('')
            }
            }>Add</button>
        </div>
    )
}
