import React, { useState, useEffect } from 'react';
import '../styles.css';
import { Link } from 'react-router-dom';
import { getMyPurchaseList } from './helper/getPurchaselist';
import { isAutheticated } from '../auth/helper';
import Base from '../core/Base';

const CheckOrders = () => {
	const [orders, setOrders] = useState([]);
	let count = 0;
	orders &&
		orders.map((order) => {
			if (order !== 'undefined') {
				count = count + 1;
			}
		});
	const { user, token } = isAutheticated();

	const preload = () => {
		getMyPurchaseList(user._id, token).then((data) => {
			console.log(data);
			if (data && data?.error) {
				console.log(data?.error);
			} else {
				setOrders(data);
			}
		});
	};

	useEffect(() => {
		preload();
	}, []);

	return (
		<Base
			title="Welcome Customer!"
			description="Manage products here"
			className="container bg-info p-4"
		>
			<Link className="btn btn-warning" to={`/user/dashboard`}>
				<span className="">User Home</span>
			</Link>
			<h2 className="text-center text-white my-3">Total {count} orders</h2>
			<div className="container p-4 box2">
				<div
					className="card text-white box2 mb-3 "
					style={{ maxWidth: '100%' }}
				>
					{orders &&
						orders.reverse().map((order, index) => {
							return (
								<div key={index} className="mb-3 ">
									<div className="card-header text-dark bg-warning border-dark">
										<h4>
											<b>Order Id: {order.transaction_id}</b>
										</h4>
									</div>
									<div
										className="card-body"
										style={{ backgroundColor: '#0f4c75' }}
									>
										<h4 className="text-white">
											Shipping Address :- {order.user.address}
										</h4>
										<h4 className="text-white">
											Phone No :- {order.user.phone}
										</h4>
										<h4 className="text-white">
											Email Id :- {order.user.email}
										</h4>
										<h5 className="text-white">
											Time of Purchase :- {order.createdAt}
										</h5>
										<h3 className="text-white">
											Total Cost is :- ${order.amount}
										</h3>
										<br />
										<h3>Products purchased:-</h3>

										{order.products.map((product, index) => {
											return (
												<div
													key={index}
													className="text-light"
													style={{ backgroundColor: '#0f4c75' }}
												>
													<ul>
														<li>
															{' '}
															<h4 className="text-light mb-3">
																{product.name} - Cost :- ${product.price}
															</h4>
														</li>
													</ul>
												</div>
											);
										})}
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</Base>
	);
};

export default CheckOrders;
