import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import {
	CaloriesDataChart,
	ExerciseChart,
	FoodChart,
	SleepTrackingChart,
	WaterDataChart,
} from '../../components';
import './Dashboard.css';

const Dashboard = () => {
	const options = {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	};
	return (
		<div className='dashboard'>
			<h1>Hi there! Here is Your Dashboard</h1>
			<div className='card-container'>
				<FoodChart options={options} />
				<ExerciseChart options={options} />
				<WaterDataChart options={options} />
				<SleepTrackingChart options={options} />
				<CaloriesDataChart options={options} />
			</div>
		</div>
	);
};

export default Dashboard;
