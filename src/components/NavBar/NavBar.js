import { AnimatePresence } from "framer-motion";

import styles from "./NavBar.module.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function NavBar({ mobileMenuOpen, setMobileMenuOpen }) {
    const hamburgerHandler = () => {
        setMobileMenuOpen();
    };

    return (
        <nav className={styles.navBar}>
            <AnimatePresence>
                {mobileMenuOpen && (
                    <MobileMenu mobileMenuOpen={mobileMenuOpen} />
                )}
            </AnimatePresence>

            <div className={styles.navBar__desktopMenu}>
                <ul>
                    <li>
                        <a href="#/">
                            <p>Features</p>
                        </a>
                    </li>
                    <li>
                        <a href="#/">
                            <p>Team</p>
                        </a>
                    </li>
                    <li>
                        <a href="#/">
                            <p>Sign In</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className={styles.navBar__mobileMenu}>
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
            </div>
        </nav>
    );
}
