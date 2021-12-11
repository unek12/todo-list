import React from 'react'

import CompletedItem from './completedItem'

export default function CompletedItems(props) {
    return (
        <div className='task__list'>
            {props.list && props.list.length ? props.list.map((item, index) => <CompletedItem item={{item, index}} addItem={props.addItem} removeCompletedItem={props.removeCompletedItem} key={index}/>) : 'Нет записей'}
        </div>
    )
}
