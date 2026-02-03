const mongoose = require("mongoose");

const bagSchema = new mongoose.Schema({
	name: String,
	price: Number,
	characteristics: String,
	category: String,
	measures: String,
	imageUrl: String,
});

bagSchema.set("toJSON", {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

module.exports = mongoose.model("Bag", bagSchema);
