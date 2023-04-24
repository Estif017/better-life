import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { dates } from '../../utils/daysLabel';

const ExerciseChart = ({ options }) => {
	const [exerciseData, setExerciseData] = useState({
		labels: dates,
		datasets: [
			{
				label: 'Exercise Time (minutes)',
				data: [30, 45, 60, 90, 60, 45, 30],
				backgroundColor: '#ff6384',
			},
		],
	});
	return (
		<div className='card'>
			<h2>Exercise Tracker</h2>
			<div className='chart'>
				<Bar data={exerciseData} options={options} />
			</div>
		</div>
	);
};

export default ExerciseChart;
