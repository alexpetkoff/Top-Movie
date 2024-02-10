import "./Header.css";
import heroImage from "../../assets/hero.png";

import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

function Header() {
    const navRef = useRef();
    const [isMobile, setIsMobile] = useState();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1000);
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleNavMenu = () => {
        if (isMobile) {
            navRef.current.classList.toggle("nav-open");
        }
    };

    return (
        <>
            <div className="header-hero-section container-inner">
                <div ref={navRef} className="header container-inner">
                    <div className="logo">top movie</div>
                    <div className="main-nav">
                        <ul className="nav-list">
                            <li className="nav-list-item">
                                <Link
                                    onClick={isMobile ? handleNavMenu : null}
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <div className="vl"></div>
                            <li className="nav-list-item">
                                <Link
                                    onClick={isMobile ? handleNavMenu : null}
                                    to="/movies"
                                >
                                    Movies
                                </Link>
                            </li>
                            <div className="vl"></div>
                            <li className="nav-list-item">
                                <Link
                                    onClick={isMobile ? handleNavMenu : null}
                                    to="/actors"
                                >
                                    Actors
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mobile-nav">
                        <button
                            onClick={handleNavMenu}
                            className="mobile-nav-btn open"
                        >
                            <ion-icon
                                className="icon-mobile-nav"
                                name="menu-outline"
                            ></ion-icon>
                        </button>

                        <button
                            onClick={handleNavMenu}
                            className="mobile-nav-btn close"
                        >
                            <ion-icon
                                className="icon-mobile-nav"
                                name="close-outline"
                            ></ion-icon>
                        </button>
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
