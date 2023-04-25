import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { dates } from '../../utils/daysLabel';

const FoodChart = ({ options, setData }) => {
	const [foodData, setFoodData] = useState({
		labels: dates,
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

	useEffect(() => {
		if (setData !== null) {
			const updateCaloriesIntake = (foodData.datasets[0].data[6] =
				setData.caloriesIntake);
			const updateCaloriesOuttake = (foodData.datasets[1].data[6] =
				setData.caloriesOuttake);
			setFoodData((prevState) => ({
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
			<h2>Food Data</h2>
			<div className='dashboard-chart'>
				<Line data={foodData} options={options} />
			</div>
		</div>
	);
};

export default FoodChart;
