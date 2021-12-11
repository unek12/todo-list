import React from "react"
import CompletedItems from "./completedItems";

export default function CompletedList (props) {

    return (
        <>
            <h3 style={{marginBottom: 8}}>Completed ({props.list.length})</h3>
            <CompletedItems list={props.list} addItem={props.addItem} removeCompletedItem={props.removeCompletedItem}/>
        </>
    )
}
