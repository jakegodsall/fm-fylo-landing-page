import React from "react";

import "../TestimonialCard/TestimonialCard";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

import MainSectionImage from "../../assets/illustration-2.svg";
import LinkIcon from "../../assets/icon-arrow.svg";
import AuthorAvatar from "../../assets/avatar-testimonial.jpg";

import styles from "./MainSection.module.css";

const MainSection = () => {
  return (
    <div className={styles.mainSection}>
      <img
        className={styles.mainSection__image}
        src={MainSectionImage}
        alt="Three people painting on boards"
      />
      <div className={styles.mainSection__lhs}>
        <div className={styles.mainSection__textContent}>
          <h1 className={styles.mainSection__title}>
            Stay productive, wherever you are
          </h1>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>
        <a href="#" className={styles.mainSection__link}>
          <p>See how Fylo works</p>
          <img
            className={styles.mainSection__linkIcon}
            src={LinkIcon}
            alt="Arrow"
          />
        </a>
        <TestimonialCard
          mainText="Fylo has improved our team productivity by an order of magnitude. Since making the switch oyur team has become a well-oiled collaboration machine."
          authorAvatar={AuthorAvatar}
          authorName="Kyle Burton"
          authorPosition="Founder & CEO, Huddle"
        />
      </div>
    </div>
  );
};

export default MainSection;
