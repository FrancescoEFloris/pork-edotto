import styles from "./Header.module.css";

function Header() {
    return (
        <header className={`${styles.header}`}>
            <div className="logo-container"></div>
                <h1>IL PORK - EDOTTO</h1>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">Ciao</ul>
                        <ul className="navbar-nav ms-auto">Ciao</ul>
                        <ul className="navbar-nav ms-auto">Ciao</ul>
                        <ul className="navbar-nav ms-auto">Ciao</ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;