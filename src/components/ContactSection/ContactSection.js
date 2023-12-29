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
                <div className={styles.contactSection__column1}>
                    <ul>
                        <a href="#">
                            <li>
                                <img src={PhoneIcon} alt="Phone Us" />
                                Phone: +1-543-123-4567
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <img src={EmailIcon} alt="Email Us" />
                                example@fylo.com
                            </li>
                        </a>
                    </ul>
                </div>
                <div className={styles.contactSection__column2}>
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
                <div className={styles.contactSection__column3}>
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
                <div className={styles.contactSection__column4}>
                    <a href="https://facebook.com">
                        <TiSocialFacebook className="fb" />
                    </a>
                    <a href="https://twitter.com">
                        <TiSocialTwitter className="twitter" />
                    </a>
                    <a href="https://instagram.com">
                        <TiSocialInstagram className="instagram" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
