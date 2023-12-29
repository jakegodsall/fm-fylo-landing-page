import styles from "./NavBar.module.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export default function NavBar({ setHamburger, hamburger }) {
    const hamburgerHandler = () => {
        setHamburger(!hamburger);
    };

    return (
        <nav className={styles.navbar}>
            <ul className={hamburger ? "nav active" : "nav"}>
                <li className="nav-item">
                    <a href="/">Features</a>
                </li>
                <li className="nav-item">
                    <a href="/">Team</a>
                </li>
                <li className="nav-item">
                    <a href="/">Sign In</a>
                </li>
            </ul>
            {hamburger ? (
                <AiOutlineClose
                    className="hamburger"
                    onClick={hamburgerHandler}
                />
            ) : (
                <GiHamburgerMenu
                    className="hamburger"
                    onClick={hamburgerHandler}
                />
            )}
        </nav>
    );
}
