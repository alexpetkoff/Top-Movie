import "./Header.css";
import heroImage from "../../assets/hero.png";
import { getAll } from "../../utils/sanity";
import { useEffect } from "react";

function Header() {
    return (
        <>
            <div className="header">
                <div className="logo">top movie</div>
                <div className="main-nav">
                    <ul className="nav-list">
                        <li className="nav-list-item">
                            <a href="#">Home</a>
                        </li>
                        <li className="nav-list-item">
                            <a href="#">Movies</a>
                        </li>
                        <li className="nav-list-item">
                            <a href="#">Actors</a>
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
