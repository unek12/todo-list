import React, {useEffect, useState} from "react";

import Header from "./header";
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
    return (
        <>
            <div className="header">
                <Header/>
            </div>
            <div className="container">
                <div className='menu'>
                    <div className='menu--block'>
                        <div className='menu__icon'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evened" clipRule="evened" d="M7.26241 7.37588H15.2624C16.2269 7.37588 16.2269 8.85106 15.2624 8.85106H7.26241C6.86525 8.85106 6.52482 8.51064 6.52482 8.11347C6.52482 7.65957 6.86525 7.37588 7.26241 7.37588ZM2.21277 6.07092C3.29078 6.07092 4.19858 6.97872 4.19858 8.11347C4.19858 9.19149 3.29078 10.0993 2.21277 10.0993C1.07801 10.0993 0.170213 9.19149 0.170213 8.11347C0.170213 6.97872 1.07801 6.07092 2.21277 6.07092ZM2.21277 11.7447C3.29078 11.7447 4.19858 12.6525 4.19858 13.7872C4.19858 14.8652 3.29078 15.773 2.21277 15.773C1.07801 15.773 0.170213 14.8652 0.170213 13.7872C0.170213 12.6525 1.07801 11.7447 2.21277 11.7447ZM2.21277 0.226948C3.40426 0.226948 4.36879 1.19149 4.36879 2.43971C4.36879 3.6312 3.40426 4.59574 2.21277 4.59574C0.964539 4.59574 0 3.6312 0 2.43971C0 1.19149 0.964539 0.226948 2.21277 0.226948ZM1.30496 2.32624L1.8156 2.83688L3.06383 1.24822C3.34752 0.851061 3.91489 1.30496 3.63121 1.70213L2.09929 3.57447C1.98582 3.74468 1.70213 3.74468 1.58865 3.6312L0.794326 2.83688C0.453901 2.49645 0.964539 1.98581 1.30496 2.32624ZM7.26241 1.70213H15.2624C16.2269 1.70213 16.2269 3.1773 15.2624 3.1773H7.26241C6.29787 3.1773 6.29787 1.70213 7.26241 1.70213ZM7.26241 13.0496H15.2624C16.2269 13.0496 16.2269 14.5248 15.2624 14.5248H7.26241C6.29787 14.5248 6.29787 13.0496 7.26241 13.0496Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <Content data={data}/>
            </div>
        </>
    )
}

export default ToDoList
