import "./Header.css";
import heroImage from "../../assets/hero.png";

import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div className="header">
                <div className="logo">top movie</div>
                <div className="main-nav">
                    <ul className="nav-list">
                        <li className="nav-list-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-list-item">
                            <Link to="/movies">Movies</Link>
                        </li>
                        <li className="nav-list-item">
                            <Link to="#">Actors</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="hero">
                <img className="hero-img" src={heroImage} alt="Hero image" />
            </div>
        </>
    );
}

export default Header;
