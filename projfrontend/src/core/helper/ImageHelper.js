import React from 'react';
import { API } from '../../backend';

const ImageHelper = ({ product }) => {
	const imageurl = product
		? `${API}/product/photo/${product._id}`
		: `https://images.pexels.com/photos/261821/pexels-photo-261821.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`;
	return (
		<div className="rounded ">
			<img
				src={imageurl}
				alt="photo"
				style={{ maxHeight: '100%', maxWidth: '80%' }}
				className="rounded"
			/>
		</div>
	);
};

export default ImageHelper;
