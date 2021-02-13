const { Schema, model } = require('mongoose');

const jobSchema = new Schema({
    companyName: String,
    dateApplied: String,
    contactName: String,
    notes: String,
}, {
    timestamps: true
})

const Job = model('Job', jobSchema)

module.exports = Job;