const mongoose = require("mongoose");

const bagSchema = new mongoose.Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	characteristics: String,
	category: String,
	measures: String,
	images: { type: [String], default: [] },
});

bagSchema.set("toJSON", {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

module.exports = mongoose.model("Bag", bagSchema);
