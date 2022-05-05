const mongoose = require("mongoose");

const ThreadSchema = new mongoose.Schema({
	id: {
		type: String,
		required: true,
		maxlength: 20,
	},
	name: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Thread", ThreadSchema);
