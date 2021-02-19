const { Schema, model } = require('mongoose');

const targetSchema = new Schema({
    companyName: String,
    dateApplied: String,
    contactName: String,
    notes: String,
})

const Target = model('Target', targetSchema)

module.exports = Target;