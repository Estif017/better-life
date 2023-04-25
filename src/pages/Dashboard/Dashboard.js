import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Chart as ChartJS } from 'chart.js/auto';
import {
	CaloriesDataChart,
	ExerciseChart,
	FoodChart,
	SleepTrackingChart,
	WaterDataChart,
} from '../../components';
import './Dashboard.css';

const Dashboard = ({ setData }) => {
	const options = {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	};
	return (
		<Container className='dashboard my-5'>
			<h1 className='text-center mb-5'>Hi there! Here is Your Dashboard</h1>
			<Row className='equal-cards'>
				<Col md={6} className='mb-4'>
					<Card>
						<Card.Body>
							<div className='chart-container'>
								<FoodChart options={options} setData={setData} />
							</div>
						</Card.Body>
					</Card>
				</Col>

				<Col md={6} className='mb-4'>
					<Card>
						<Card.Body>
							<div className='chart-container'>
								<ExerciseChart options={options} setData={setData} />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col md={6} className='mb-4'>
					<Card>
						<Card.Body>
							<div className='chart-container' id='waterChart'>
								<WaterDataChart options={options} setData={setData} />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col md={6} className='mb-4'>
					<Card>
						<Card.Body>
							<div className='chart-container'>
								<SleepTrackingChart options={options} setData={setData} />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col md={6} className='mb-4'>
					<Card>
						<Card.Body>
							<div className='chart-container'>
								<CaloriesDataChart options={options} setData={setData} />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Dashboard;
