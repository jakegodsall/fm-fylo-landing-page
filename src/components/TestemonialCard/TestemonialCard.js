import React from "react";

const TestemonialCard = (props) => {
    return (
        <div className='testemonial__container'>
            <div className='testemonial__text'>{props.mainText}</div>
        </div>
    );
};

export default TestemonialCard;
