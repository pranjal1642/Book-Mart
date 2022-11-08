const braintree = require('braintree');

const gateway = new braintree.BraintreeGateway({
	environment: braintree.Environment.Sandbox,
	merchantId: '449xgtmdm4jft7cg',
	publicKey: '9qkhm5ryby3c3y7t',
	privateKey: '952698910bf3748cb8e7dca6b25fafc1',
});
exports.getToken = (req, res) => {
	gateway.clientToken.generate({}, function (err, response) {
		if (err) {
			res.status(500).send(err);
		} else {
			res.send(response);
		}
	});
};

exports.processPayment = (req, res) => {
	let nonceFromTheClient = req.body.paymentMethodNonce;

	let amountFromTheClient = req.body.amount;
	gateway.transaction.sale(
		{
			amount: amountFromTheClient,
			paymentMethodNonce: nonceFromTheClient,

			options: {
				submitForSettlement: true,
			},
		},
		function (err, result) {
			if (err) {
				res.status(500).send(error);
			} else {
				res.send(result);
			}
		},
	);
};
