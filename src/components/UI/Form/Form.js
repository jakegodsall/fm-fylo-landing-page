import React from "react";

import "./Form.css";

const Form = (props) => {
    return (
        <form class='form'>
            <input
                className='form__input'
                type='text'
                placeholder={props.placeholder}
                autocomplete='off'
            />
            <button className='form__submit' type='submit'>
                {props.buttonInnerText}
            </button>
        </form>
    );
};

export default Form;
