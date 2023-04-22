import { useState } from 'react';
import { Line } from 'react-chartjs-2';

const FoodChart = ({ options }) => {
	const [foodData, setFoodData] = useState({
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
				label: 'Calories Consumed',
				data: [2000, 2200, 1800, 2400, 2500, 2300, 1900],
				backgroundColor: '#ff6384',
			},
			{
				label: 'Calories Burned',
				data: [1000, 1200, 900, 1100, 1300, 1000, 800],
				backgroundColor: '#36a2eb',
			},
		],
	});
	return (
		<div>
			<h2>Food Data</h2>
			<Line data={foodData} options={options} />
		</div>
	);
};

export default FoodChart;
