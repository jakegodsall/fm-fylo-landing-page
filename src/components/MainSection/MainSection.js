import React from 'react';

import './MainSection.css';
import '../TestimonialCard/TestimonialCard';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

import MainSectionImage from '../../assets/illustration-2.svg';
import LinkIcon from '../../assets/icon-arrow.svg';
import AuthorAvatar from '../../assets/avatar-testimonial.jpg';

const MainSection = props => {
	return (
		<div className='main-section__container'>
			<img
				className='main-section__image'
				src={MainSectionImage}
				alt='Three people painting on boards'
			/>
			<div className='main-section__text-content'>
				<h1 className='main-section__title'>
					Stay productive, wherever you are
				</h1>
				<p>
					Never let location be an issue when accessing your files.
					Fylo has you covered for all your file storage needs.
				</p>
				<p>
					Securely share files and folders with friends, family and
					colleagues for live collaboration. No email attachments
					required.
				</p>

				<a href='#'>
					<p className='main-section__link'>
						See how Fylo works
						<img
							className='main-section__link-icon'
							src={LinkIcon}
							alt='Arrow'
						/>
					</p>
				</a>

				<TestimonialCard
					mainText='Fylo has improved our team productivity by an order of magnitude. Since making the switch oyur team has become a well-oiled collaboration machine.'
					authorAvatar={AuthorAvatar}
					authorName='Kyle Burton'
					authorPosition='Founder & CEO, Huddle'
				/>
			</div>
		</div>
	);
};

export default MainSection;
