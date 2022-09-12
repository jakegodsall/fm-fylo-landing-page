import React from 'react';

import './TestimonialCard.css';

import QuotationMark from '../../assets/icon-quotes.svg';

const TestemonialCard = props => {
	return (
		<div className='testimonial__container'>
			<img
				className='testimonial__quotation-mark'
				src={QuotationMark}
				alt='Quotation Mark'
			/>
			<div className='testimonial__text'>{props.mainText}</div>
			<div className='testimonial__author'>
				<img
					className='testimonial__author-avatar'
					src={props.authorAvatar}
					alt='Testimonial Author Avatar'
				/>
				<div className='testimonial__author-column'>
					<p className='testimonial__author-name'>
						{props.authorName}
					</p>
					<p className='testimonial__author-position'>
						{props.authorPosition}
					</p>
				</div>
			</div>
		</div>
	);
};

export default TestemonialCard;
