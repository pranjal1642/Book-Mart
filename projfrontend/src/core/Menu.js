import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { signout, isAutheticated } from '../auth/helper';

const currentTab = (history, path) => {
	if (history.location.pathname === path) {
		return { color: '#22CB5C' };
	} else {
		return { color: '#FFFFFF' };
	}
};

const Menu = ({ history }) => (
	<div>
		<ul className="nav nav-tabs bg-dark">
			<div className="ml-3">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZwCJ4LEzsx2TFUjrU_PlJaqeF0z1nQg2KLw&usqp=CAU"
					alt="logo"
					style={{ width: '60px', padding: '3px' }}
				/>
			</div>
			<span className="text-white mr-auto ml-3 mt-2 logo  ">
				<h4>BOOK MART</h4>
			</span>

			<li className="nav-item">
				<Link style={currentTab(history, '/')} className="nav-link" to="/Home">
					Home
				</Link>
			</li>
			{(isAutheticated() === false || isAutheticated().user.role === 0) && (
				<li className="nav-item">
					<Link
						style={currentTab(history, '/cart')}
						className="nav-link"
						to="/cart"
					>
						Cart
					</Link>
				</li>
			)}
			{isAutheticated() && isAutheticated().user.role === 0 && (
				<li className="nav-item">
					<Link
						style={currentTab(history, '/user/dashboard')}
						className="nav-link"
						to="/user/dashboard"
					>
						U. Dashboard
					</Link>
				</li>
			)}
			{isAutheticated() && isAutheticated().user.role === 1 && (
				<li className="nav-item ">
					<Link
						style={currentTab(history, '/admin/dashboard')}
						className="nav-link"
						to="/admin/dashboard"
					>
						A. Dashboard
					</Link>
				</li>
			)}
		

			{!isAutheticated() && (
				<Fragment>
					<li className="nav-item">
						<Link
							style={currentTab(history, '/signup')}
							className="nav-link"
							to="/signup"
						>
							SignUp
						</Link>
					</li>
					<li className="nav-item">
						<Link
							style={currentTab(history, '/signin')}
							className="nav-link"
							to="/signin"
						>
							SignIn
						</Link>
					</li>
				</Fragment>
			)}
			{isAutheticated() && (
				<li className="nav-item">
					<span
						className="nav-link text-warning"
						onClick={() => {
							signout(() => {
								history.push('/');
							});
						}}
					>
						Signout
					</span>
				</li>
			)}
		</ul>
	</div>
);

export default withRouter(Menu);
