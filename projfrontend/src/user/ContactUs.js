import React from 'react';
import Base from '../core/Base';
import Menu from '../core/Menu';
import '../styles.css';
import './Contact.css';

export const ContactUs = () => {
	return (
		<div className="contact">
			<Menu />
			<div className="col-md-6 offset-sm-3 text-left text-white">
				<h1>
					<center>Contact Us Page</center>
				</h1>
				<form action="https://formspree.io/f/xbjqwkbv" method="post">
					<div className="contact-info">
						<div className="fluid">
							<div className="row">
								<div className="col text-center">
									<div className="text-white" title=" Contact Us page">
										<div className="form-group">
											<label
												className="btn btn-block btn-success"
												htmlFor="name"
											>
												First Name
											</label>
											<input
												name="name"
												className="form-control"
												placeholder="Name"
												type="text"
												id="name"
												name="name"
											/>
										</div>
										<div className="form-group">
											<label
												className="btn btn-block btn-success"
												htmlFor="name"
											>
												Last Name
											</label>
											<input
												className="form-control"
												placeholder="LastName"
												type="text"
												id="name"
												type="text"
												id="name"
												name="name"
											/>
										</div>
										<div className="form-group">
											<label
												className="btn btn-block btn-success"
												htmlFor="email"
											>
												Email Address
											</label>
											<input
												className="form-control"
												placeholder="Email"
												type="text"
												id="name"
												type="email"
												id="email"
												email="email"
											/>
										</div>
										<div className="form-group">
											<label
												className="btn btn-block btn-success"
												htmlFor="message"
											>
												Phone Number
											</label>
											<textarea
												className="form-control"
												placeholder="Phone Number"
												type="text"
												id="name"
												id="message"
												number="number"
												type="numeric"
											/>
										</div>
										<div className="form-group">
											<label
												className="btn btn-block btn-success"
												htmlFor="message"
											>
												<span>Message</span>
											</label>
											<textarea
												className="form-control"
												placeholder="Message"
												type="text"
												id="name"
												id="message"
												message="message"
												type="text"
											/>
										</div>
										<button
											className="btn  btn-success mt-1 mb-2"
											type="submit"
										>
											Submit
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
