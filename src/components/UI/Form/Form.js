import React, { useState } from "react";

import validateEmail from "../../../utils/validators";

import styles from "./Form.module.css";

const Form = (props) => {
    const [emailInput, setEmailInput] = useState("");
    const [hasBeenEdited, setHasBeenEdited] = useState(false);

    function onChangeHandler(event) {
        setEmailInput(event.target.value);
    }

    function onBlurHandler(event) {
        if (event.target.value === "") {
            setHasBeenEdited(false);
        } else {
            setHasBeenEdited(true);
        }
    }

    function onClickHandler(event) {
        event.preventDefault();
    }

    const emailIsInvalid = hasBeenEdited && !validateEmail(emailInput);

    return (
        <>
            <form className={styles.form}>
                <input
                    className={styles.form__input}
                    type="text"
                    placeholder={props.placeholder}
                    autoComplete="off"
                    onChange={onChangeHandler}
                    onBlur={onBlurHandler}
                />
                <button
                    className={styles.form__submit}
                    type="submit"
                    onClick={onClickHandler}
                >
                    {props.buttonInnerText}
                </button>
            </form>
            {emailIsInvalid && (
                <p className={styles.form__validationMessage}>
                    Email address is invalid
                </p>
            )}
        </>
    );
};

export default Form;
