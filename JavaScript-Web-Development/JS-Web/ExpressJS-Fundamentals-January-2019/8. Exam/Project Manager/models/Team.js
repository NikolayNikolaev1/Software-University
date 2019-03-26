const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    name: { type: Schema.Types.String, required: true, unique: true },
    projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Team', teamSchema);