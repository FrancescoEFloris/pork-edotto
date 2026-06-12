import { NavLink } from 'react-router-dom';
import styles from "./Header.module.css";

function Header() {
    return (
        <header className={`${styles.header}`}>
            <div className={`container-fluid ${styles.headContainer}`}>
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
                    <div className={`col-8 col-md-9 col-lg-9 py-lg-3 py-0 ${styles.navPages}`}>
                        <ul className="row row-cols-2 row-cols-lg-4 list-unstyled m-0 p-0 text-center align-items-center">
                            <li>
                                <NavLink
                                    className={function (state) {
                                        if (state.isActive) {
                                            return 'nav-link d-inline-block active';
                                        } else {
                                            return 'nav-link d-inline-block';
                                        }
                                    }}
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="col nav-item mb-2 mb-lg-0">
                                <NavLink
                                    className={function (state) {
                                        if (state.isActive) {
                                            return 'nav-link d-inline-block active';
                                        } else {
                                            return 'nav-link d-inline-block';
                                        }
                                    }}
                                    to="/products"
                                >
                                    Menu
                                </NavLink>
                            </li>
                            <li className="col nav-item mb-2 mb-lg-0">
                                <NavLink
                                    className={function (state) {
                                        if (state.isActive) {
                                            return 'nav-link d-inline-block active';
                                        } else {
                                            return 'nav-link d-inline-block';
                                        }
                                    }}
                                    to="/pippo"
                                >
                                    Peer-Reviews
                                </NavLink>
                            </li>
                            <li className="col nav-item mb-2 mb-lg-0">
                                <NavLink
                                    className={function (state) {
                                        if (state.isActive) {
                                            return 'nav-link d-inline-block active';
                                        } else {
                                            return 'nav-link d-inline-block';
                                        }
                                    }}
                                    to="/aboutus"
                                >
                                    Chi siamo
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </header>

    );
}

export default Header;