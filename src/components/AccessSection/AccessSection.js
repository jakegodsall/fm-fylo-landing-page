import React from "react";
import Form from "../UI/Form/Form";

import styles from "./AccessSection.module.css";

const AccessSection = () => {
  return (
    <div className={styles.accessSection__container}>
      <div className={styles.accessSection__textContent}>
        <h1 className={styles.accessSection__title}>Get early access today</h1>
        <p className={styles.accessSection__mainContent}>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </div>
      <div className={styles.accessSection__form}>
        <Form
          isCol={true}
          placeholder="email@example.com"
          buttonInnerText="Get Started for Free"
        />
      </div>
    </div>
  );
};

export default AccessSection;
