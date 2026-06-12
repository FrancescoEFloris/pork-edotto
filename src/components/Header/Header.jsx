import styles from "./Header.module.css";

function Header() {
    return (
        <header className={`${styles.header}`}>

            <div className={`${styles.logoContainer}`}>
                <div className={`${styles.imgContainer}`}>
                    <img src="src\public\images\porkedotto-logo.png" alt="Logo principale" className="img-fluid"/>
                </div>
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