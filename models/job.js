const { Schema, model } = require('mongoose');

const jobSchema = new Schema({
    companyName: String,
    dateApplied: String,
    contactName: String,
    notes: String,
})

const Job = model('Job', jobSchema)

module.exports = Job;