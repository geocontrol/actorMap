var Schema = {
	actors: {
		id: {type: 'increments', nullable: false, primary: true},
		scale: {type: 'integer', nullable: true, unsigned: true},
		name: {type: 'string', maxlength: 150, nullable: false}
	},
	
	assets: {
		id: {type: 'increments', nullable: false, primary: true},
		scale: {type: 'integer', nullable: true, unsigned: true},
		name: {type: 'string', maxlength: 150, nullable: false}
	},
	
	relationships: {
		id: {type: 'increments', nullable: false, primary: true},
		source_id: {type: 'integer', nullable: false, unsigned: true},
		target_id: {type: 'integer', nullable: false, unsigned: true},
		type: {type: 'string', maxlength: 150, nullable: false}
	}

};

module.exports = Schema;