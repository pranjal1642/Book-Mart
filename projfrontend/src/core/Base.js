import React from 'react';
import Menu from './Menu';
import '../styles.css';
import { Link } from 'react-router-dom';

const Base = ({
	title = 'My Title',
	description = 'My desription',
	className = 'bg-dark text-white p-4',
	children,
	
}) => (
	<div>
		<Menu />
		
		<div className="container-fluid">
			<div className=" jumbotron bg-dark text-white text-center">
				<h2 className="display-4">{title}</h2>
				<p className="lead">{description}</p>
			</div>
			<div className={className}>{children}</div>
		</div>
		<footer className="footer bg-dark mt-auto py-1">
			<div className="container-fluid bg-success text-white text-center py- 1">
				<h4>If you got any questions, feel free to reach out!</h4>

				<Link to="/ContactUS" className="btn btn-md btn-warning mt-3 mb-1 ">
					Contact US
				</Link>
			</div>
			<div className="container">
				<span className="text-muted">
					An Amazing <span className="text-white">Book Mart</span> store
				</span>
			</div>
		</footer>
	</div>
);

export default Base;
