import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Contact, Dashboard, HomePage } from './pages';
import { Footer, Navbar } from './components';
import './App.css';

const App = () => {
	return (
		<BrowserRouter>
			<div className='App'>
				<Navbar />
				<div className='container'>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/dashboard' element={<Dashboard />} />
						<Route path='/Contact' element={<Contact />} />
						<Route path='/About' element={<About />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
