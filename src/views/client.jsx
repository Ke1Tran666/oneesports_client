import { Outlet } from "react-router-dom"
import { SiteFooter, SiteHeader } from '../layouts/import-layout.jsx'

const Client = () => {
    return (
        <>
            <SiteHeader />
            <Outlet />
            <SiteFooter />
        </>
    )
}

export default Client