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
            {mobileMenuOpen && <MobileMenu mobileMenuOpen={mobileMenuOpen} />}

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
