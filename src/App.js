import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Contact, Dashboard, HomePage } from './pages';
import { Footer, Navbar } from './components';

const App = () => {
	return (
		<BrowserRouter>
			<div className='App'>
				<Navbar />
				<Footer />
			</div>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/Contact' element={<Contact />} />
				<Route path='/About' element={<About />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
