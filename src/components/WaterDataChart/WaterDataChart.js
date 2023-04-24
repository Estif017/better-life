import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { dates } from '../../utils/daysLabel';

const WaterDataChart = ({ options }) => {
	const [waterData, setWaterData] = useState({
		labels: dates,
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
