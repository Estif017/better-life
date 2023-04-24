import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { dates } from '../../utils/daysLabel';

const SleepTrackingChart = ({ options }) => {
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
	return (
		<div className='card'>
			<h2>Sleep Tracker</h2>
			<div className='chart'>
				<Line data={sleepData} options={options} />
			</div>
		</div>
	);
};

export default SleepTrackingChart;
