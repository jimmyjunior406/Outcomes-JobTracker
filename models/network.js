const { Schema, model } = require('mongoose');

const networkSchema = new Schema({
    name: String,
    company: String,
    notes: String
}, {
    timestamps: true
})

const Network = model('Network', networkSchema)

module.exports = Network;