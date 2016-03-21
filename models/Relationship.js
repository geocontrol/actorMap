var mongoose = require('mongoose');

var RelationshipSchema = new mongoose.Schema({
	actor1_id: String,
	relationship_type: String,
	actor2_id: String,
	updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Relationship', RelationshipSchema);