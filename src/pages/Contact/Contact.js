import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
	width: '100%',
	height: '400px',
};

const mapCenter = {
	lat: 34.048025,
	lng: -118.442455,
};

const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';

const Contact = () => {
	return (
		<Container className='my-5 contact-height'>
			<h2 className='text-center mb-5'>Contact Us</h2>
			<Row>
				<Col md={6}>
					<Card>
						<Card.Body>
							<Card.Title>Address</Card.Title>
							<Card.Text>
								2180 Westwood Blvd. <br />
								Suite 2G <br />
								Los Angeles, CA 90025
							</Card.Text>
							<Card.Title>Phone</Card.Title>
							<Card.Text>(310) 475-4754</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col md={6}>
					<LoadScript googleMapsApiKey={apiKey}>
						<GoogleMap
							mapContainerStyle={mapContainerStyle}
							zoom={15}
							center={mapCenter}></GoogleMap>
					</LoadScript>
				</Col>
			</Row>
		</Container>
	);
};

export default Contact;
