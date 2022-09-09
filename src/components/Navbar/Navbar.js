import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import Logo from "../../assets/logo.svg";

import "./Navbar.css";

const Navbar = () => {
    const [hamburger, setHamburger] = useState(false);

    const hamburgerHandler = () => {
        setHamburger(!hamburger);
    };

    return (
        <div className='nav-container'>
            <a href='/'>
                <img className='logo' src={Logo} alt='Fylo Logo' />
            </a>
            <ul className={hamburger ? "nav active" : "nav"}>
                <li className='nav-item'>
                    <a href='/'>Features</a>
                </li>
                <li className='nav-item'>
                    <a href='/'>Team</a>
                </li>
                <li className='nav-item'>
                    <a href='/'>Sign In</a>
                </li>
            </ul>
            {hamburger ? (
                <AiOutlineClose
                    className='hamburger'
                    onClick={hamburgerHandler}
                />
            ) : (
                <GiHamburgerMenu
                    className='hamburger'
                    onClick={hamburgerHandler}
                />
            )}
        </div>
    );
};

export default Navbar;
