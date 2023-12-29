import React from "react";

import QuotationMark from "../../assets/icon-quotes.svg";

import styles from "./TestimonialCard.module.css";

const TestemonialCard = (props) => {
    return (
        <div className={styles.testimonial__container}>
            <img
                className={styles.testimonial__quotationMark}
                src={QuotationMark}
                alt="Quotation Mark"
            />
            <div className={styles.testimonial__text}>{props.mainText}</div>
            <div className={styles.testimonial__author}>
                <img
                    className={styles.testimonial__authorAvatar}
                    src={props.authorAvatar}
                    alt="Testimonial Author Avatar"
                />
                <div className={styles.testimonial__authorColumn}>
                    <p className={styles.testimonial__authorName}>
                        {props.authorName}
                    </p>
                    <p className={styles.testimonial__authorPosition}>
                        {props.authorPosition}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TestemonialCard;
