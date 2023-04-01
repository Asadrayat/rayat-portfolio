import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import About from './components/About';
import Stars from './components/canvas/Stars';
import Contact from './components/Contact';
import Feedbacks from './components/Feedbacks';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Tech from './components/Tech';
import Works from './components/Works';



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
				<Works />
				<div className='relative z-0'>
					<Contact />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;