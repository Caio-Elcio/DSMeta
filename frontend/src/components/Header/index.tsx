import logo from "../../assets/img/logo.svg";
import "./styles.css";

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" title="Dashboard" />
                <h1>DSMeta</h1>
                <p>
                    Developed by
                    <a href="https://github.com/Caio-Elcio" target="_blank"> Caio-Elcio</a>
                </p>
            </div>
        </header>
    );
}

export default Header;