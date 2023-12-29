import React from "react";

import styles from "./Form.module.css";

const Form = (props) => {
    return (
        <form className={styles.form}>
            <input
                className={styles.form__input}
                type="text"
                placeholder={props.placeholder}
                autoComplete="off"
            />
            <button className={styles.form__submit} type="submit">
                {props.buttonInnerText}
            </button>
        </form>
    );
};

export default Form;
