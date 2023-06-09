import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { dates } from '../../utils/daysLabel';

const WaterDataChart = ({ options, setData }) => {
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

	useEffect(() => {
		if (setData !== null) {
			const updatedWaterIntake = (waterData.datasets[0].data[6] =
				setData.waterIntake);
			setWaterData((prevState) => ({
				...prevState,
				data: [{ ...prevState.datasets[0].data }, updatedWaterIntake],
			}));
		}
	}, [setData]);
	return (
		<div className='dashboard-card'>
			<h2>Water Tracker</h2>
			<div className='dashboard-chart'>
				<Doughnut className='Doughnut' data={waterData} options={options} />
			</div>
		</div>
	);
};

export default WaterDataChart;
