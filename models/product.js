var restful = require('node-restful');
var mongoose = restful.mongoose;

var productSchema = new mongoose.Schema({
	name: String,
	song: String,
	price: Number
});

var Order = restful.model('products', productSchema);

module.exports = Order;

