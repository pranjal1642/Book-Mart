import React from 'react';
import { BiArrowFromLeft } from 'react-icons/all';
import './Home.css';

import '../styles.css';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Base from './Base';

const Front = () => {
	return (
		<form>
			<div className=" banner">

				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZwCJ4LEzsx2TFUjrU_PlJaqeF0z1nQg2KLw&usqp=CAU" alt="logo" 
				style={{ width: '90px', padding: '3px' }}/>
				
				<h1>
					BOOK MART
				</h1>
			
			

				<div>
					<Link to="/Home">
						<button className="btn  btn-md btn-info mt-9 mb-1 ">
							Go To Book Mart <BiArrowFromLeft />
						</button>
					</Link>
				</div>
			</div>

			<div id="box">
				<div class="top"></div>
				<div>
					<span></span>
					<span>
						<i class="tape"></i>
					</span>
					<span></span>
					<span>
						<i class="tape"></i>
					</span>
				</div>
			</div>
		</form>
	);
};
export default Front;
