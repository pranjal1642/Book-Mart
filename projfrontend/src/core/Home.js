import React, { useState, useEffect } from 'react';
import { CgMouse } from 'react-icons/all';


import '../styles.css';
import Base from './Base';
import Card from './Card';
import { Link } from 'react-router-dom';
import { getProducts } from './helper/coreapicalls';
import { isAutheticated } from '../auth/helper/index';
import './Home.css';

 
const { user } = isAutheticated();
console.log(user);
export default function Home() {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(false);
	const [visible, setVisible] = useState(6);
	const [size, setSize] = useState(9);
	const loadMore = () => {
		return setVisible((products) => products + 3);
	};

	const loadAllProduct = () => {
		getProducts().then((data) => {
			if (data.error) {
				setError(data.error);
			} else {
				setProducts(data);
			}
		});
	};

	useEffect(() => {
		loadAllProduct();
	}, []);

	return (
		<Base title="Welcome To Book Mart" description="Happy Shopping">
			
			<center>
				<div id="demo" className="carousel slide" data-ride="carousel">
					<ul className="carousel-indicators">
						<li data-target="#demo" data-slide-to="0" className="active"></li>
						<li data-target="#demo" data-slide-to="1"></li>
						<li data-target="#demo" data-slide-to="2"></li>
					</ul>

					<div className="carousel-inner">
						<div className="carousel-item active">
							<img
								src="https://images.unsplash.com/photo-1587321331708-cf94d549f405?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
								alt="New York"
								width="1100"
								height="500"
							/>
							<div className="carousel-caption alignment">
								<h3>Books</h3>
								<p>
									<strong>"Books are a uniquely portable magic.”</strong>
								</p>
							</div>
						</div>
						<div className="carousel-item ">
							<img
								src="https://images.unsplash.com/photo-1531208483756-19591c7c4ab8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
								alt="Chicago"
								width="1100"
								height="500"
							/>
							<div className="carousel-caption ">
								<h3>Books</h3>
								<p>
									<center>
										“A room without books is like a body without a soul.”
									</center>
								</p>
							</div>
						</div>
						<div className="carousel-item ">
							<img
								src="https://www.careeranna.com/articles/wp-content/uploads/2019/06/Books-to-prepare-for-TISSNET-2020.jpg"
								alt="Los Angeles"
								width="1100"
								height="500"
							/>
							<div className="carousel-caption text-dark alignment">
								<h3>Books</h3>
								<p>“Outside of a dog, a book is a man's best friend".</p>
							</div>
						</div>
					</div>
					<a className="carousel-control-prev" href="#demo" data-slide="prev">
						<span className="carousel-control-prev-icon"></span>
					</a>
					<a className="carousel-control-next" href="#demo" data-slide="next">
						<span className="carousel-control-next-icon"></span>
					</a>
				</div>
			</center>

			<div className="row text-center  cardbox" id="row">
				<h1 className="text-white mt-5 mb-5 ">All of the Books</h1>
				<div className="row">
					{products.slice(0, visible).map((product, index) => {
						return (
							<div key={index} className="mb-4 col-xs-5 col-sm-6 col-md-4">
								<Card product={product} />
							</div>
						);
					})}
				</div>
			</div>
			{size >= visible && (
				<div className="container-fluid  text-white text-center py- 1">
					<button
						className=" btn  btn-md btn-success  mt-3 mb-1  "
						onClick={() => loadMore()}
					>
						Load More
					</button>
				</div>
			)}
		</Base>
	);
}
