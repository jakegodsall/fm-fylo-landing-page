import React from "react";
import {
    TiSocialFacebook,
    TiSocialTwitter,
    TiSocialInstagram,
} from "react-icons/ti";

import styles from "./ContactSection.module.css";

import FyloLogo from "../../assets/logo.svg";
import PhoneIcon from "../../assets/icon-phone.svg";
import EmailIcon from "../../assets/icon-email.svg";

const ContactSection = () => {
    return (
        <div className={styles.contactSection__container}>
            <img
                className={styles.contactSection__logo}
                src={FyloLogo}
                alt="Fylo Logo"
            />

            <div className={styles.contactSection__grid}>
                <div className={styles.contactSection__column}>
                    <ul>
                        <a href="#">
                            <li className={styles.contactSection__contactItem}>
                                <img src={PhoneIcon} alt="Phone Us" />
                                <p>Phone: +1-543-123-4567</p>
                            </li>
                        </a>
                        <a href="#">
                            <li className={styles.contactSection__contactItem}>
                                <img src={EmailIcon} alt="Email Us" />
                                <p>example@fylo.com</p>
                            </li>
                        </a>
                    </ul>
                </div>
                <div className={styles.contactSection__column}>
                    <ul>
                        <a href="#">
                            <li>About Us</li>
                        </a>
                        <a href="#">
                            <li>Jobs</li>
                        </a>
                        <a href="#">
                            <li>Press</li>
                        </a>
                        <a href="#">
                            <li>Blog</li>
                        </a>
                    </ul>
                </div>
                <div className={styles.contactSection__column}>
                    <ul>
                        <a href="#">
                            <li>Contact Us</li>
                        </a>
                        <a href="#">
                            <li>Terms</li>
                        </a>
                        <a href="#">
                            <li>Pricacy</li>
                        </a>
                    </ul>
                </div>
                <div className={styles.contactSection__socialsSection}>
                    <a href="https://facebook.com" className="fb">
                        <TiSocialFacebook />
                    </a>
                    <a href="https://twitter.com" className="twitter">
                        <TiSocialTwitter />
                    </a>
                    <a href="https://instagram.com" className="instagram">
                        <TiSocialInstagram />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
