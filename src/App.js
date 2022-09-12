import React from 'react';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

import './App.css';
import MainSection from './components/MainSection/MainSection';
import AccessSection from './components/AccessSection/AccessSection';
import ContactSection from './components/ContactSection/ContactSection';

const App = () => {
	return (
		<div className='main-container'>
			<Navbar />
			<Hero />
			<MainSection />
			<AccessSection />
			<ContactSection />
		</div>
	);
};

export default App;
