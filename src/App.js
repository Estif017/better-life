import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ClassesPage, Contact, Dashboard, HomePage, InsertData } from './pages';
import { Footer, Navbar } from './components';
import './App.css';

const App = () => {
	const [activityData, setActivityData] = useState(null);
	const setData = (data) => {
		setActivityData(data);
		return data;
	};

	return (
		<BrowserRouter>
			<div className='App'>
				<Navbar />
				<div className='container'>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route
							path='/dashboard'
							element={<Dashboard setData={activityData} />}
						/>
						<Route path='/addData' element={<InsertData setData={setData} />} />
						<Route path='/classes' element={<ClassesPage />} />
						<Route path='/Contact' element={<Contact />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
