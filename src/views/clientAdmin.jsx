import { Outlet } from "react-router-dom"
import { SiteFooter, SiteHeader } from '../layouts/import-layout.jsx'

const ClientAdmin = () => {

    return (
        <>
            <SiteHeader />
            <Outlet />
            <SiteFooter />
        </>
    );
};

export default ClientAdmin;