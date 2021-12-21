const api = 'https://unek12-todo-api.herokuapp.com/'

async function AddTodoItem(item) {
    return fetch(api + localStorage.getItem('id'), {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json',
            'id': localStorage.getItem('id'),
            'todo': item,
        },
    })
}

async function DeleteTodoItem(item) {
    return fetch(api + localStorage.getItem('id'), {
        method: 'Delete',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json',
            'id': localStorage.getItem('id'),
            'todo': item,
        },
    })
}

async function ChangeItem(prev, item) {
    return fetch(api + localStorage.getItem('id'), {
        method: 'PUT',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json',
            'id': localStorage.getItem('id'),
            'prevtodo': prev,
            'todo': item,
        },
    })
}

async function ChangeCompleteOfItem(item, completed) {
    return fetch(api + localStorage.getItem('id'), {
        method: 'PATCH',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json',
            'id': localStorage.getItem('id'),
            'todo': item,
            'completed': completed
        },
    })
}

async function GetData() {
    return fetch(api + localStorage.getItem('id')).
    then(res => res.json()).
    then(res => {
        if (!localStorage.getItem('id')){
            localStorage.setItem('id', res._id)  
        }
        console.log(res);
        return res
    }).catch(e => console.log(e))
}

export {
    AddTodoItem,
    DeleteTodoItem,
    ChangeItem,
    ChangeCompleteOfItem,
    GetData
}