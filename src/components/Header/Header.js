import React, { useState } from "react";

import NavBar from "../NavBar/NavBar";

import Logo from "../../assets/logo.svg";

import "./Header.css";

const Header = () => {
    const [hamburger, setHamburger] = useState(false);

    const setHamburgerHandler = () => {
        setHamburger(!hamburger);
    };

    return (
        <header className="header">
            <a href="/">
                <img className="logo" src={Logo} alt="Fylo Logo" />
            </a>
            <NavBar setHamburger={setHamburgerHandler} hamburger={hamburger} />
        </header>
    );
};

export default Header;
