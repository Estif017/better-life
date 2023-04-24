import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

const WaterDataChart = ({ options }) => {
	const [waterData, setWaterData] = useState({
		labels: [
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
			'Sunday',
		],
		datasets: [
			{
				label: 'Water Intake (cups)',
				data: [8, 6, 10, 8, 12, 10, 6],
				backgroundColor: '#ffce56',
			},
		],
	});
	return (
		<div className='card'>
			<h2>Water Tracker</h2>
			<div className='chart'>
				<Doughnut className='Doughnut' data={waterData} options={options} />
			</div>
		</div>
	);
};

export default WaterDataChart;
