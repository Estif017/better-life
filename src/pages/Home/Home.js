import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import KelliImage from '../../image/kelli.jpg';
import EliasImage from '../../image/elias.jpg';
import JaneImage from '../../image/Jane.jpg';
const Home = () => {
	return (
		<div>
			<Container fluid className='text-white text-center py-5' id='intro'>
				<h1>Welcome to Chrome Cycle Studio</h1>
				<p>
					Track your workouts, monitor your progress, and achieve your fitness
					goals.
				</p>
				<Button
					id='getStartedbtn'
					variant='outline-light'
					size='lg'
					href='/addData'>
					Get Started
				</Button>
			</Container>

			{/* About Us Section */}
			<Container className='about-us'>
				<h2 className='text-center mb-5'>About Us</h2>
				<p>
					“Restless Brilliance” is the label given to our Chrome culture.
					Founded on the core principles of hard work, respect and genuine
					compassion, we recognize that fitness is not “one size fits all” and
					we strive to inspire the athlete in every rider by offering high
					cardio, endurance building rides. Slow and thoughtful in the making,
					the Chrome brand has been carefully executed to draw on only the most
					positive aspects of indoor cycling, creating a fresh approach to
					boutique fitness.
				</p>

				<p>
					While music radiates through our crisp sound system as an integral
					part of the Chrome experience, the carefully selected beats create a
					connection between the rider and the power of the bike, encouraging
					each rider to achieve the most positive results.
				</p>

				<p>
					Chrome Cycle is a family vested in each other’s success and joined by
					a passion to make our community a happier, healthier place. We offer
					monthly charity rides to support local non-profits, and believe to
					feel good, you must do good.
				</p>
			</Container>

			{/* Features Section */}
			<Container>
				<h2 className='text-center mb-5'>Features</h2>
				<Row className='features-row'>
					<Col md={4} className='features-col card-container'>
						<Card className='card'>
							<Card.Body>
								<Card.Title className='card-title'>Track Workouts</Card.Title>
								<Card.Text>
									Log your workouts and track your progress over time. Whether
									you're looking to build strength, increase endurance, or just
									stay active, our platform makes it easy to set goals, track
									your progress, and stay motivated.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={4} className='features-col card-container'>
						<Card className='card'>
							<Card.Body>
								<Card.Title className='card-title'>Class Packages</Card.Title>
								<Card.Text>
									Choose the perfect plan that fits your fitness goals and
									budget. Whether you want to commit to a long-term plan or try
									out a few classes first, we have the right package for you.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>

			{/* Testimonial Section */}
			<Container className='my-5'>
				<h2 className='text-center mb-5'>What Our Users Say</h2>
				<Row>
					<Col md={4}>
						<blockquote className='blockquote text-center'>
							<img
								src={KelliImage}
								alt='Kelli Daniel'
								className='rounded-circle mb-3'
							/>
							<p>
								"Fitness Tracker has helped me stay consistent and reach my
								fitness goals."
							</p>
							<footer className='blockquote-footer'>Kelli Daniel</footer>
						</blockquote>
					</Col>
					<Col md={4}>
						<blockquote className='blockquote text-center'>
							<img
								src={JaneImage}
								alt='Jane Smith'
								className='rounded-circle mb-3'
							/>
							<p>
								"I love the personalized workout plans and the supportive
								community."
							</p>
							<footer className='blockquote-footer'>Jane Smith</footer>
						</blockquote>
					</Col>
					<Col md={4}>
						<blockquote className='blockquote text-center'>
							<img
								src={EliasImage}
								alt='Elias Johnson'
								className='rounded-circle mb-3'
							/>
							<p>
								"The workout tracking feature has been a game-changer for me."
							</p>
							<footer className='blockquote-footer'>Elias Johnson</footer>
						</blockquote>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Home;
