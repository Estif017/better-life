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

const Dashboard = ({ setData }) => {
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
				<FoodChart options={options} setData={setData} />
				<ExerciseChart options={options} setData={setData} />
				<WaterDataChart options={options} setData={setData} />
				<SleepTrackingChart options={options} setData={setData} />
				<CaloriesDataChart options={options} setData={setData} />
			</div>
		</div>
	);
};

export default Dashboard;
