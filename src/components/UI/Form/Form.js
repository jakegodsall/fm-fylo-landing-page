import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import validateEmail from "../../../utils/validators";

import styles from "./Form.module.css";

const Form = ({ isCol, placeholder, buttonInnerText }) => {
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
      <form
        className={
          isCol ? `${styles.form} ${styles.form_col}` : `${styles.form}`
        }
      >
        <input
          className={
            emailIsInvalid
              ? `${styles.form__input} ${styles.form__inputInvalid}`
              : styles.form__input
          }
          type="text"
          placeholder={placeholder}
          autoComplete="off"
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
        />
        <button
          className={styles.form__submit}
          type="submit"
          onClick={onClickHandler}
        >
          {buttonInnerText}
        </button>
      </form>
      <div className={styles.form__validationContainer}>
        <AnimatePresence>
          {emailIsInvalid && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.form__validationMessage}
            >
              Email address is invalid
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Form;
