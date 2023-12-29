import React from "react";

import HeroImage from "../../assets/illustration-1.svg";
import Form from "../UI/Form/Form";

import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <div className={styles.hero}>
            <img className={styles.hero__image} src={HeroImage} alt="Hero" />
            <div className={styles.hero__container}>
                <h1 className={styles.hero__title}>
                    All your files in one secure location, accessible anywhere.
                </h1>
                <p className={styles.hero__text}>
                    Fylo stores your most important files in one secure
                    location. Access them wherever you need, share and
                    collaborate with friends, and co-workers.
                </p>
                <Form
                    placeholder="Enter your email."
                    buttonInnerText="Get Started"
                />
            </div>
        </div>
    );
};

export default Hero;
