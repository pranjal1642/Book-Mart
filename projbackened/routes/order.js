const express = require('express');
const router = express.Router();

const { isSignedIn, isAuthenticated, isAdmin } = require('../controllers/auth');
const { getUserById, pushOrderInPurchaseList } = require('../controllers/user');

const { updateStock } = require('../controllers/product');

const {
	getOrderById,
	createOrder,
	getAllOrders,
	updateStatus,
	getOrderStatus,
	userPurchaseList,
} = require('../controllers/order');

//params
router.param('userId', getUserById);
router.param('orderId', getOrderById);

// Actual route
//create
router.post(
	'/order/create/:userId',
	isSignedIn,
	isAuthenticated,
	pushOrderInPurchaseList,
	updateStock,
	createOrder,
);

//read
router.get(
	'/order/all/:userId',
	isSignedIn,
	isAuthenticated,
	isAdmin,
	getAllOrders,
);
router.get('/order/my/:userId', isSignedIn, isAuthenticated, userPurchaseList);

//status of order update
router.get(
	'/order/status/:userId',
	isSignedIn,
	isAuthenticated,
	isAdmin,
	getOrderStatus,
);
router.put(
	'/order/:orderId/status/:userId',
	isSignedIn,
	isAuthenticated,
	isAdmin,
	updateStatus,
);

//delete

module.exports = router;
