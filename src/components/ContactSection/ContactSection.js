import React from 'react';
import {
	TiSocialFacebook,
	TiSocialTwitter,
	TiSocialInstagram,
} from 'react-icons/ti';

import './ContactSection.css';

import FyloLogo from '../../assets/logo.svg';
import PhoneIcon from '../../assets/icon-phone.svg';
import EmailIcon from '../../assets/icon-email.svg';

const ContactSection = () => {
	return (
		<div className='contact-section__container'>
			<img
				className='contact-section__logo'
				src={FyloLogo}
				alt='Fylo Logo'
			/>

			<div className='contact-section__grid'>
				<div className='contact-section__column-1'>
					<ul>
						<a href='#'>
							<li>
								<img
									src={PhoneIcon}
									alt='Phone Us'
								/>
								Phone: +1-543-123-4567
							</li>
						</a>
						<a href='#'>
							<li>
								<img
									src={EmailIcon}
									alt='Email Us'
								/>
								example@fylo.com
							</li>
						</a>
					</ul>
				</div>
				<div className='contact-section__column-2'>
					<ul>
						<a href='#'>
							<li>About Us</li>
						</a>
						<a href='#'>
							<li>Jobs</li>
						</a>
						<a href='#'>
							<li>Press</li>
						</a>
						<a href='#'>
							<li>Blog</li>
						</a>
					</ul>
				</div>
				<div className='contact-section__column-3'>
					<ul>
						<a href='#'>
							<li>Contact Us</li>
						</a>
						<a href='#'>
							<li>Terms</li>
						</a>
						<a href='#'>
							<li>Pricacy</li>
						</a>
					</ul>
				</div>
				<div className='contact-section__column-4'>
					<a href='https://facebook.com'>
						<TiSocialFacebook className='fb' />
					</a>
					<a href='https://twitter.com'>
						<TiSocialTwitter className='twitter' />
					</a>
					<a href='https://instagram.com'>
						<TiSocialInstagram className='instagram' />
					</a>
				</div>
			</div>
		</div>
	);
};

export default ContactSection;
