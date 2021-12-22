import React, {useEffect, useState} from "react";

import Content from "./content";

import { GetData } from '../utils/requests.util'

function ToDoList() {
    const [data, setData] = useState({completed: [], todo: []})
    useEffect(() => {
        GetData().then(res => {
            const obj = {todo: [], completed: []}

            res.map(item => {
                if (!item.completed){
                    obj.todo.push(item.todo)
                } else {
                    obj.completed.push(item.todo)
                }
            })
            setData(obj)
        })
    }, [])
    return (<Content data={data}/>)
}

export default ToDoList
