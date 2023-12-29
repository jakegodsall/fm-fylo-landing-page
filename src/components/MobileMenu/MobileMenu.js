import styles from "./MobileMenu.module.css";

export default function MobileMenu({ mobileMenuOpen }) {
    return (
        <div className={styles.mobileMenu}>
            <div className={styles.mobileMenu__backdrop}></div>
            <div className={styles.mobileMenu__main}>
                <ul className={styles.mobileMenu__list}>
                    <li className={styles.mobileMenu__item}>
                        <a href="/">Features</a>
                    </li>
                    <li className={styles.mobileMenu__item}>
                        <a href="/">Team</a>
                    </li>
                    <li className={styles.mobileMenu__item}>
                        <a href="/">Sign In</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
