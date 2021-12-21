import React from 'react'

import Item from './Item'

export default function Items(props) {
    return (
        <div className='task__list'>
            {props.list && props.list.length ?
                props.list.map((item, index) =>
                    <Item item={{item, index}} removeItem={props.removeItem} addCompleted={props.addCompleted} changeItem={props.changeItem} key={index}/>)
                    : 'Нет записей'
            }
        </div>
    )
}
