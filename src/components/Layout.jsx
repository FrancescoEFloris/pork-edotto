import { Outlet } from "react-router-dom";
import Header from "./Header/Header.jsx";
import Main from "./Homepage/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import styles from "./Layout.module.css";

function Layout() {
    return (
        <div className={styles.layout}>
            <Header />

            <main className={styles.content}>
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}
export default Layout