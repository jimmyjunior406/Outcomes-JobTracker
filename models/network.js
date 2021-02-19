const { Schema, model } = require('mongoose');

const networkSchema = new Schema({
    companyName: String,
    dateApplied: String,
    contactName: String,
    notes: String,
})

const Network = model('Network', networkSchema)

module.exports = Network;