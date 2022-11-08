import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './core/Home';
import Signup from './user/Signup';
import Signin from './user/Signin';
import AdminRoute from './auth/helper/AdminRoutes';
import PrivateRoute from './auth/helper/PrivateRoutes';
import UserDashBoard from './user/UserDashBoard';
import AdminDashBoard from './user/AdminDashBoard';
import AddCategory from './admin/AddCategory';
import ManageCategories from './admin/ManageCategories';
import AddProduct from './admin/AddProduct';
import ManageProducts from './admin/ManageProducts';
import UpdateProduct from './admin/UpdateProduct';
import UpdateCategory from './admin/UpdateCategories';
import Cart from './core/Cart';

import UpdateUser from './admin/UpdateUser';
import { ContactUs } from './user/ContactUs';
import UserShipping from './core/shippingPage';
import ManageOrders from './admin/ManageOrders';
import Payment from "./core/Purchase";
import CheckOrders from "./user/CheckOrders";
import Front from './core/Front';


const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Front} />
				<Route path="/Home" exact component={Home} />

				<Route path="/signup" exact component={Signup} />
				<Route path="/signin" exact component={Signin} />
				<Route path="/cart" exact component={Cart} />
				<Route path="/contactus" exact component={ContactUs} />

				<PrivateRoute path="/cart/payment/:userId" exact component={Payment} />

				<PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />
				<PrivateRoute path="/user/add/:userId" exact component={UpdateUser} />

				<AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} />
				<AdminRoute
					path="/admin/create/category"
					exact
					component={AddCategory}
				/>
				<AdminRoute
					path="/admin/categories"
					exact
					component={ManageCategories}
				/>
				<AdminRoute path="/admin/create/product" exact component={AddProduct} />
				<AdminRoute path="/admin/products" exact component={ManageProducts} />
				<AdminRoute
					path="/admin/product/update/:productId"
					exact
					component={UpdateProduct}
				/>
				<AdminRoute
					path="/admin/category/update/:categoryId"
					exact
					component={UpdateCategory}
				/>
				<AdminRoute path="/admin/order/all/:userId" exact component={ManageOrders} />

				<PrivateRoute
					path="/cart/shipping/:userId"
					exact
					component={UserShipping}
				/>
				<PrivateRoute path="/user/order/my/:userId" exact component={CheckOrders}/>
			</Switch>
		</BrowserRouter>
	);
};
export default Routes;
