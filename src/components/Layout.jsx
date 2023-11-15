import { Outlet } from "react-router-dom"
import { Fragment } from 'react'
const Layout = () => {
    return (
        <Fragment>

            <h1>Movies</h1>

            <Outlet />

        </Fragment>
    )
}

export default Layout