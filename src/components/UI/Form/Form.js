import React from "react";

import "./Form.css";

const Form = (props) => {
    return (
        <form className='form'>
            <input
                className='form__input'
                type='text'
                placeholder={props.placeholder}
                autoComplete='off'
            />
            <button className='form__submit' type='submit'>
                {props.buttonInnerText}
            </button>
        </form>
    );
};

export default Form;
