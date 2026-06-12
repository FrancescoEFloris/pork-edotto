import styles from "./Header.module.css";

function Header() {
    return (
        <header className={`${styles.header}`}>
            <div className={`container-fluid py-2 ${styles.headContainer}`}>
                <div className="row align-items-center">

                    {/* LOGO: Al lato (sinistra). Più grande su md/lg, leggermente ridotto in sm */}
                    <div className="col-4 col-md-3 col-lg-3">
                        <div className={`${styles.logoContainer}`}>
                            <div className={`${styles.imgContainer}`}>
                                <img
                                    src="src\public\images\porkedotto-logo.png"
                                    alt="Logo principale"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>

                    {/* NAVBAR: Allineata a sinistra con layout fluido dei NavItems */}
                    <div className={`col-8 col-md-9 col-lg-9 ${styles.navPages}`}>
                        <ul className="row row-cols-2 row-cols-lg-4 list-unstyled m-0 p-0 text-center align-items-center py-lg-5 py-sm-4">
                            <li className="col nav-item mb-2 mb-lg-0">
                                <a className="nav-link btn-primary d-inline-block" href="/">Home</a>
                            </li>
                            <li className="col nav-item mb-2 mb-lg-0">
                                <a className="nav-link d-inline-block" href="/">Menù</a>
                            </li>
                            <li className="col nav-item mb-2 mb-lg-0">
                                <a className="nav-link d-inline-block" href="/">Peer-Reviews</a>
                            </li>
                            <li className="col nav-item mb-2 mb-lg-0">
                                <a className="nav-link d-inline-block" href="/">Chi siamo</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </header>
    );
}

export default Header;