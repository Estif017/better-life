import React, { useState } from 'react';
import './InsertData.css';
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

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
		<Box className='form-container'>
			<h1>Insert Data</h1>
			<Card>
				<Card.Body>
					<form onSubmit={handleSubmit}>
						<Box mb={2}>
							<TextField
								fullWidth
								type='number'
								label='Calories Intake'
								name='caloriesIntake'
								value={formData.caloriesIntake}
								onChange={handleChange}
								required
							/>
						</Box>
						<Box mb={2}>
							<TextField
								fullWidth
								type='number'
								label='Calories Out'
								name='caloriesOuttake'
								value={formData.caloriesOuttake}
								onChange={handleChange}
								required
							/>
						</Box>
						<Box mb={2}>
							<TextField
								fullWidth
								type='number'
								label='Daily Active Hours (in minutes)'
								name='exercise'
								value={formData.exercise}
								onChange={handleChange}
								required
							/>
						</Box>
						<Box mb={2}>
							<TextField
								fullWidth
								type='number'
								label='Water Intake (in cups)'
								name='waterIntake'
								value={formData.waterIntake}
								onChange={handleChange}
								required
							/>
						</Box>
						<Box mb={2}>
							<TextField
								fullWidth
								type='number'
								label='Sleep Intake'
								name='sleepIntake'
								value={formData.sleepIntake}
								onChange={handleChange}
								required
							/>
						</Box>
						<Button id='submitBtn' type='submit' variant='contained'>
							Submit
						</Button>
					</form>
				</Card.Body>
			</Card>
		</Box>
	);
};

export default InsertData;
