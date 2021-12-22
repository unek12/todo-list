import NotFound from "../components/NotFound"
import ToDoList from "../components/ToDoList"
export const routes = [
    {path: '/', exact: true, element: <ToDoList/>},
    {path: '*', exact: true, element: <NotFound/>}
]