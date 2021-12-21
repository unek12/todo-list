import React from "react"
import CompletedItems from "./completedItems";

export default function CompletedList (props) {

    return (
        <>
            <h3 style={{marginBottom: 8}}>Completed ({props.list ? props.list.length : 0})</h3>
            <CompletedItems list={props.list} changeCompletedItem={props.changeCompletedItem} removeCompletedItem={props.removeCompletedItem}/>
        </>
    )
}
