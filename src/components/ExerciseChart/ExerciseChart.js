import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { dates } from '../../utils/daysLabel';

const ExerciseChart = ({ options, setData }) => {
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
	useEffect(() => {
		if (setData !== null) {
			const updateExercise = (exerciseData.datasets[0].data[6] =
				setData.exercise);
			setExerciseData((prevState) => ({
				...prevState,
				datasets: [
					{
						...prevState.datasets[0],
						data: [...prevState.datasets[0].data],
						updateExercise,
					},
				],
			}));
		}
	}, [setData]);
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
