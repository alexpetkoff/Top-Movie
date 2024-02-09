import "./Header.css";
import heroImage from "../../assets/hero.png";

import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div className="header-hero-section container-inner">
                <div className="header container-inner">
                    <div className="logo">top movie</div>
                    <div className="main-nav">
                        <ul className="nav-list">
                            <li className="nav-list-item">
                                <Link to="/">Home</Link>
                            </li>
                            <div className="vl"></div>
                            <li className="nav-list-item">
                                <Link to="/movies">Movies</Link>
                            </li>
                            <div className="vl"></div>
                            <li className="nav-list-item">
                                <Link to="/actors">Actors</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="hero">
                <div className="hero-wrapper">
                    <img
                        className="hero-img"
                        src={heroImage}
                        alt="Hero image"
                    />
                </div>
            </div>
        </>
    );
}

export default Header;
