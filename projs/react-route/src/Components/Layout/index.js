import { Outlet } from "react-router-dom";
import { Footer } from "../../pages/Footer";
import { Header } from "../../pages/Header";

export function Layout() {
    return (
        <>
            <Header />
            <main>{<Outlet />}</main>
            <Footer />
        </>
    )
}