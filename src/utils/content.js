import React, {useEffect, useState} from "react";

import AddInput from "./addInput";
import List from "./list";
import CompletedList from "./completedList";

export default function Content() {
    const [todo, setTodo] = useState(['todo 1', 'todo 2', 'todo 3'])
    const [completed, setCompleted] = useState([])

    const addItem = () => {
        return (item) => {
            if (item.length) {
                setTodo(prev => [...prev, item])
            }
        }
    }

    const addCompleted = () => {
        return (index) => {
            setCompleted([...completed, todo.splice(index, 1)])
        }
    }

    const changeItem = () => {
        return (item, index) => {
            if (item.length) {
                todo.splice(index, 1, item)
                setTodo(prev => [...prev])
            }
        }
    }

    const removeItem = () => {
        return (index) => {
            todo.splice(index, 1)
            setTodo([...todo])
        }
    }

    const removeCompletedItem = () => {
        return (index) => {
            completed.splice(index, 1)
            setCompleted([...completed])
        }
    }

    useEffect(() => {
        console.log(todo)
    }, [todo])

    return (
        <div className='content'>
            <div className="left" style={{marginRight: 64}}>
                <AddInput addItem={addItem}/>
                <div className='total'>
                    <span>Total: {todo.length}</span>
                </div>
                <List list={todo} addCompleted={addCompleted} removeItem={removeItem} changeItem={changeItem}/>
            </div>
            <div className="completed">
                <CompletedList list={completed} addItem={addItem} removeCompletedItem={removeCompletedItem}/>
            </div>
        </div>
    );
}
