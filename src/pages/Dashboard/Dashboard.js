import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import {
	ExerciseChart,
	FoodChart,
	SleepTrackingChart,
	WaterDataChart,
} from '../../components';

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
			<FoodChart options={options} />
			<ExerciseChart options={options} />
			<WaterDataChart options={options} />
			<SleepTrackingChart options={options} />
		</div>
	);
};

export default Dashboard;
