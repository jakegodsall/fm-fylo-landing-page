import { motion } from "framer-motion";

import styles from "./MobileMenu.module.css";

export default function MobileMenu({ mobileMenuOpen }) {
    return (
        <div className={styles.mobileMenu}>
            <motion.div
                className={styles.mobileMenu__backdrop}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            ></motion.div>
            <motion.div
                className={styles.mobileMenu__main}
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                transition={{ duration: 0.5 }}
            >
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
            </motion.div>
        </div>
    );
}
