import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link className='nav-link' to='/'>
						Home
					</Link>
				</li>
				<li className='right'>
					<Link className='nav-link' to='/dashboard'>
						Dashboard
					</Link>
				</li>
				<li>
					<Link className='nav-link' to='/about'>
						About
					</Link>
				</li>
				<li>
					<Link className='nav-link' to='/contact'>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
