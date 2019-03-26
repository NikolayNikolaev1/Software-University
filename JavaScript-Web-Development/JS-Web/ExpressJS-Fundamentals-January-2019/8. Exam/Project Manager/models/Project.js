const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: { type: Schema.Types.String, required: true, unique: true },
    description: { type: Schema.Types.String, required: true, maxlength: 50 },
    team: { type: Schema.Types.ObjectId, ref: 'Team' }
});

module.exports = mongoose.model('Project', projectSchema);