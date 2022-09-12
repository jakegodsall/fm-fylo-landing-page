import React from 'react';
import Form from '../UI/Form/Form';

import './AccessSection.css';

const AccessSection = () => {
	return (
		<div className='access-section__container'>
			<div className='access-section__text-content'>
				<h1 className='access-section__title'>
					Get early access today
				</h1>
				<p className='access-section__main-content'>
					It only takes a minute to sign up and our free starter tier
					is extremely generous. If you have any questions, our
					support team would be happy to help you.
				</p>
			</div>
			<div className='access-section__form'>
				<Form
					placeholder='email@example.com'
					buttonInnerText='Get Started for Free'
				/>
			</div>
		</div>
	);
};

export default AccessSection;
