import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./Header.module.css";

function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const getNavLinkClass = ({ isActive }) =>
        `nav-link d-inline-block ${isActive ? 'active' : ''}`;
    return (<>
        <header className={`${styles.header}`}>
            <div className={`container-fluid ${styles.headContainer}`}>
                <div className="row align-items-start position-relative container-fluid">
                    <div className="col-6 col-xl-3">
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
                    <div className="col-6 col-xl-9 d-flex justify-content-center align-items-start">
                        <ul className={`list-unstyled m-0 p-0 text-center align-items-center ${styles.navDesktop}`}>
                            <li><NavLink className={getNavLinkClass} to="/">Home</NavLink></li>
                            <li><NavLink className={getNavLinkClass} to="/products">Menu</NavLink></li>
                            <li><NavLink className={getNavLinkClass} to="/aboutus">Chi siamo</NavLink></li>
                            <li><NavLink className={getNavLinkClass} to="/reviews">Review</NavLink></li>
                        </ul>
                        <button
                            className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
                            onClick={toggleMenu}
                            aria-label="Menu"
                        >
                            <span className={styles.bar}></span>
                            <span className={styles.bar}></span>
                            <span className={styles.bar}></span>
                        </button>
                        <ul className={`${styles.navMobile} ${isOpen ? styles.active : ''} list-unstyled m-0 p-0 text-center`}>
                            <li><NavLink className={getNavLinkClass} to="/" onClick={toggleMenu}>Home</NavLink></li>
                            <li><NavLink className={getNavLinkClass} to="/products" onClick={toggleMenu}>Menu</NavLink></li>
                            <li><NavLink className={getNavLinkClass} to="/aboutus" onClick={toggleMenu}>Chi siamo</NavLink></li>
                            <li><NavLink className={getNavLinkClass} to="/reviews" onClick={toggleMenu}>Review</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        <div className={`${styles.redbar}`}></div>
    </>
    );
}
export default Header;