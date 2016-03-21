var mongoose = require('mongoose');

var ActorSchema = new mongoose.Schema({
	name: String,
	type: String,
	note: String,
	updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Actor', ActorSchema);