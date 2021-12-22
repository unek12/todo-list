import React from "react"
import {Route, Routes} from "react-router"
import {routes} from './routes'

export default function Router() {
    return (
        <Routes>
            {routes.map(item => <Route {...item} />)}
        </Routes>
    )
}
