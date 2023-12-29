import styles from "./NavBar.module.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export default function NavBar({ mobileMenuOpen, setMobileMenuOpen }) {
    const hamburgerHandler = () => {
        setMobileMenuOpen();
    };

    return (
        <nav className={styles.navBar}>
            <ul
                className={`${styles.navBar__desktop} ${
                    mobileMenuOpen ? styles.active : ""
                }`}
            >
                <li className={styles.navBar__item}>
                    <a href="/">Features</a>
                </li>
                <li className={styles.navBar__item}>
                    <a href="/">Team</a>
                </li>
                <li className={styles.navBar__item}>
                    <a href="/">Sign In</a>
                </li>
            </ul>
            {mobileMenuOpen ? (
                <AiOutlineClose
                    className={styles.navBar__hamburger}
                    onClick={hamburgerHandler}
                />
            ) : (
                <GiHamburgerMenu
                    className={styles.navBar__hamburger}
                    onClick={hamburgerHandler}
                />
            )}
        </nav>
    );
}
