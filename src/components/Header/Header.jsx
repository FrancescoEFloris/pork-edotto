import styles from "./Header.module.css";

function Header() {
    return (
        <header className={`${styles.header}`}>

            <div className={`${styles.logoContainer}`}>
                <h1>IL PORK - EDOTTO</h1>
            </div>
            <nav className="">

                <div className="container-fluid">
                        <ul className="d-flex justify-content-around">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Menù</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Peer-Reviews</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Chi siamo</a>
                            </li>
                        </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;