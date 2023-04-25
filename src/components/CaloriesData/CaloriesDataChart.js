import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { dates } from '../../utils/daysLabel';

const CaloriesDataChart = ({ options, setData }) => {
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

	useEffect(() => {
		if (setData !== null) {
			const updateCaloriesIntake = (caloriesData.datasets[0].data[6] =
				setData.caloriesIntake);
			const updateCaloriesOuttake = (caloriesData.datasets[1].data[6] =
				setData.caloriesOuttake);
			setCaloriesData((prevState) => ({
				...prevState,
				datasets: [
					{
						...prevState.datasets[0],
						data: [...prevState.datasets[0].data, updateCaloriesIntake],
					},
					{
						...prevState.datasets[1],
						data: [...prevState.datasets[1].data, updateCaloriesOuttake],
					},
				],
			}));
		}
	}, [setData]);
	return (
		<div className='dashboard-card'>
			<h2>Calories In/Out Comparison</h2>
			<div className='dashboard-chart'>
				<Bar data={caloriesData} options={options} />
			</div>
		</div>
	);
};

export default CaloriesDataChart;
