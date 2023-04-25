import React from 'react';
import './ClassesPage.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ClassesPage = () => {
	return (
		<div className='container py-5 classes-container'>
			<h1 className='text-center mb-5 my-15'>Classes</h1>
			<div className='row'>
				<div className='col-md-6 col-lg-4'>
					<Card bg='secondary' text='light'>
						<Card.Body>
							<Card.Title>Chrome Ride</Card.Title>
							<Card.Text>
								Each 50-minute, high-intensity ride blends athletic performance
								with motivating rhythm. Our exclusive signature format was
								designed by master trainers specifically for Chrome Cycle.
							</Card.Text>
							<Button variant='light'>Learn More</Button>
						</Card.Body>
					</Card>
				</div>
				<div className='col-md-6 col-lg-4'>
					<Card bg='secondary' text='light'>
						<Card.Body>
							<Card.Title>Shine On</Card.Title>
							<Card.Text>
								Our brilliant 60-minute endurance ride combines Chrome signature
								cycling with true endurance building exercises to strengthen and
								tone beyond any regular workout.
							</Card.Text>
							<Button variant='light'>Learn More</Button>
						</Card.Body>
					</Card>
				</div>
				<div className='col-md-6 col-lg-4'>
					<Card bg='secondary' text='light'>
						<Card.Body>
							<Card.Title>Special Event/Grouprides</Card.Title>
							<Card.Text>
								Chrome enjoys hosting special event rides for birthday parties,
								bride rides, charity events, and corporate team building rides.
								Contact us for more information.
							</Card.Text>
							<Button variant='light'>Learn More</Button>
						</Card.Body>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default ClassesPage;
