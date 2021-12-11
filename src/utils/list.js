import React from 'react'
import Items from "./Items";

export default function List (props) {
    return (
        <>
            <h3 style={{marginTop: 16, marginBottom: 8}}>To do ({props.list.length})</h3>
            <Items list={props.list} addCompleted={props.addCompleted} removeItem={props.removeItem} changeItem={props.changeItem}/>

        </>
    )
}
