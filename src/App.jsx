import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Tech from './components/Tech';
import Work from './components/Work';



const App = () => {
	return (
		<BrowserRouter>
			<div className='relative z-0 bg-primary'>
				<div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
					<Navbar />
					<Hero />
				</div>
				<About />
				<Tech />
				<Work />
				<div className='relative z-0'>
					<Contact />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;