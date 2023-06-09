import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { dates } from '../../utils/daysLabel';

const SleepTrackingChart = ({ options, setData }) => {
	const [sleepData, setSleepData] = useState({
		labels: dates,
		datasets: [
			{
				label: 'Sleep Time (hours)',
				data: [7, 6, 8, 7.5, 8, 7, 6.5],
				backgroundColor: '#36a2eb',
			},
		],
	});
	useEffect(() => {
		if (setData !== null) {
			const updateSleepData = (sleepData.datasets[0].data[6] =
				setData.waterIntake);
			setSleepData((prevState) => ({
				...prevState,
				datasets: [
					{
						...prevState.datasets[0],
						data: [...prevState.datasets[0].data, updateSleepData],
					},
				],
			}));
		}
	}, [setData]);
	return (
		<div className='dashboard-card'>
			<h2>Sleep Tracker</h2>
			<div className='dashboard-chart'>
				<Line data={sleepData} options={options} />
			</div>
		</div>
	);
};

export default SleepTrackingChart;
