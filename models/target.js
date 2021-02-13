const { Schema, model } = require('mongoose');

const targetSchema = new Schema({
    companyName: String,
    contactName: String,
    notes: String
}, {
    timestamps: true
})

const Target = model('Target', targetSchema)

module.exports = Target;