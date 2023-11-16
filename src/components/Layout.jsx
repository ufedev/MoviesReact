import { Outlet, Link } from "react-router-dom"
import { Fragment } from 'react'
const Layout = () => {
    return (
        <Fragment>
            <Link to="/"><h1>Movies</h1></Link>
            <Outlet />

        </Fragment>
    )
}

export default Layout