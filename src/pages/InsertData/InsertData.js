import React, { useState } from 'react';
import './InsertData.css';
import { useNavigate } from 'react-router-dom';

const InsertData = ({ setData }) => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		caloriesIntake: '',
		caloriesOuttake: '',
		exercise: '',
		waterIntake: '',
		sleepIntake: '',
	});
	const handleChange = ({ target }) => {
		setFormData((prevState) => ({
			...prevState,
			[target.name]: target.value,
		}));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setData(formData);
		navigate('/dashboard');
	};
	return (
		<div className='form-container'>
			<h1>Insert Data</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor='caloriesIntake'>Calories Intake</label>
				<input
					type='number'
					id='caloriesIntake'
					name='caloriesIntake'
					value={formData.caloriesIntake}
					onChange={handleChange}
					required
				/>
				<label htmlFor='caloriesOuttake'>Calories Out</label>
				<input
					type='number'
					id='caloriesOuttake'
					name='caloriesOuttake'
					value={formData.caloriesOuttake}
					onChange={handleChange}
					required
				/>
				<label htmlFor='exercise'> Daily Active Hours (in minutes) </label>
				<input
					type='number'
					id='exercise'
					name='exercise'
					value={formData.exercise}
					onChange={handleChange}
					required
				/>
				<label htmlFor='waterIntake'> water Intake (in cups)</label>
				<input
					type='number'
					id='waterIntake'
					name='waterIntake'
					value={formData.waterIntake}
					onChange={handleChange}
					required
				/>
				<label htmlFor='sleepIntake'>Sleep Intake</label>
				<input
					type='number'
					id='sleepIntake'
					name='sleepIntake'
					value={formData.sleepIntake}
					onChange={handleChange}
					required
				/>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default InsertData;
