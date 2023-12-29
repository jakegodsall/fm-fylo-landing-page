import React, { useState } from "react";

import NavBar from "../NavBar/NavBar";

import Logo from "../../assets/logo.svg";

import styles from "./Header.module.css";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(true);

    const handleMobileMenu = () => {
        setMobileMenuOpen((prevState) => !prevState);
    };

    return (
        <header className={styles.header}>
            <a href="/">
                <img
                    className={styles.header__logo}
                    src={Logo}
                    alt="Fylo Logo"
                />
            </a>
            <NavBar
                setMobileMenuOpen={handleMobileMenu}
                mobileMenuOpen={mobileMenuOpen}
            />
        </header>
    );
};

export default Header;
