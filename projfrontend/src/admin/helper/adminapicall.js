import { API } from '../../backend';

export const createCategory = (userId, token, category) => {
	return fetch(`${API}/category/create/${userId}`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(category),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => {
			console.log(err);
		});
};

// get all Categories
export const getCategories = () => {
	return fetch(`${API}/categories`, {
		method: 'GET',
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};
export const updateCategory = (categoryId, userId, token, category) => {
	return fetch(`${API}/category/${categoryId}/${userId}`, {
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',

			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(category),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};
//get a category
export const getCategory = (categoryId) => {
	return fetch(`${API}/category/${categoryId}`, {
		method: 'GET',
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

//delete category
export const deleteCategory = (categoryId, userId, token) => {
	return fetch(`${API}/category/${categoryId}/${userId}`, {
		method: 'DELETE',
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${token}`,
		},
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};
// product calls

// Create a product
export const createaProduct = (userId, token, product) => {
	return fetch(`${API}/product/create/${userId}`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: product,
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};
//get all products

export const getProducts = () => {
	return fetch(`${API}/products`, {
		method: 'GET',
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => {
			console.log(err);
		});
};

//delete a product
export const deleteProduct = (productId, userId, token) => {
	return fetch(`${API}/product/${productId}/${userId}`, {
		method: 'DELETE',
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${token}`,
		},
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => {
			console.log(err);
		});
};

// get a product
export const getProduct = (productId) => {
	return fetch(`${API}/products/${productId}`, {
		method: 'GET',
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => {
			console.log(err);
		});
};
// update a product

export const updateProduct = (productId, userId, token, product) => {
	return fetch(`${API}/product/${productId}/${userId}`, {
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: product,
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => {
			console.log(err);
		});
};
//get all orders
export const getPurchaseList = (userId, token) => {
	return fetch(`${API}/order/all/${userId}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${token}`,
		},
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};
// orders
export const checkOrders = (userId, token) => {
	return fetch(`${API}/stripepayment`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${token}`,
		},
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};
//user orders
export const YoursOrders = (userId, token) => {
	return fetch(`${API}/orders/user/${userId}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${token}`,
		},
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

//update user
export const addUserdetails = (userId, token, user) => {
	return fetch(`${API}/user/add/${userId}`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',

			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(user),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};
