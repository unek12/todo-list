import React, {useEffect, useState} from "react";

import AddInput from "./addInput";
import List from "./list";
import CompletedList from "./completedList";
import { AddTodoItem, ChangeCompleteOfItem, DeleteTodoItem, ChangeItem } from '../utils/requests.util'

export default function Content(props) {
    const [todo, setTodo] = useState([])
    const [completed, setCompleted] = useState([])

    const addItem = () => {
        return (item) => {
            if (item.length) {
                AddTodoItem(item).then(() => setTodo(prev => [...prev, item]))
            }
        }
    }

    const addCompleted = () => {
        return (index) => {
            ChangeCompleteOfItem(todo[index], 1)
            setCompleted(prev => [...prev, todo.splice(index, 1)])
        }
    }

    const changeItem = () => {
        return (item, index) => {
            if (item.length) {
                ChangeItem(todo[index], item)
                todo.splice(index, 1, item)
                setTodo(prev => [...prev])
            }
        }
    }

    const removeItem = () => {
        return (index) => {
            DeleteTodoItem(todo.splice(index, 1))
            setTodo([...todo])
        }
    }
    
    const changeCompletedItem = () => {
        return (index) => {
            const item = completed.splice(index, 1)
            setCompleted([...completed])
            setTodo([...todo, item])
            ChangeCompleteOfItem(item, 0)
        }
    }

    const removeCompletedItem = () => {
        return (index) => {
            DeleteTodoItem(completed.splice(index, 1))
            setCompleted([...completed])
        }
    }

    useEffect(() => {
        if (props.data){
            setTodo(props.data.todo)
            setCompleted(props.data.completed)
        }
    }, [props.data])

    return (
        <div className='content'>
            <div className="left" style={{marginRight: 64}}>
                <AddInput addItem={addItem}/>
                <div className='total'>
                    <span>Total: {todo ? todo.length : 0}</span>
                </div>
                <List list={todo} addCompleted={addCompleted} removeItem={removeItem} changeItem={changeItem}/>
            </div>
            <div className="completed">
                <CompletedList list={completed} changeCompletedItem={changeCompletedItem} removeCompletedItem={removeCompletedItem}/>
            </div>
        </div>
    );
}
