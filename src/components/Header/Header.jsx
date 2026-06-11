import styles from "./Header.module.css";

function Header() {
    return (
        <header>
            <div className="logo-container">
                <h1>IL PORK <div className="logo-circle"></div> EDOTTO</h1>
            </div>
            <nav>
                <a href="#home">HOME</a>
                <a href="#menu">MENU</a>
                <a href="#reviews">PEER-REVIEWS</a>
                <a href="#contatti">CONTATTI</a>
            </nav>
        </header>
    );
}

export default Header;