import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { FoodChart } from '../../components';

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
			<FoodChart />
		</div>
	);
};

export default Dashboard;
