import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { dates } from '../../utils/daysLabel';

const CaloriesDataChart = ({ options }) => {
	const [caloriesData, setCaloriesData] = useState({
		labels: dates,
		datasets: [
			{
				label: 'Calories In',
				data: [2000, 2200, 1800, 2400, 2500, 2300, 1900],
				backgroundColor: '#ff6384',
			},
			{
				label: 'Calories Out',
				data: [1000, 1200, 900, 1100, 1300, 1000, 800],
				backgroundColor: '#36a2eb',
			},
		],
	});
	return (
		<div className='card'>
			<h2>Calories In/Out Comparison</h2>
			<div className='chart'>
				<Bar data={caloriesData} options={options} />
			</div>
		</div>
	);
};

export default CaloriesDataChart;
