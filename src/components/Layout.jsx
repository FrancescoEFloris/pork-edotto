import { Outlet } from "react-router-dom";
import Header from "./Header/Header.jsx";
import Main from "./Homepage/Main.jsx";
import Footer from "./Footer/Footer.jsx";

function Layout() {
    return (
        <>
            <Header />

                <Outlet />

            <Footer />
        </>
    )
}
export default Layout