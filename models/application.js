const mongoose = require('../config/database')
const { Schema } = mongoose

const applicationSchema = new Schema({
  title: { type: String, required: true },
  companyName: { type: String, required: true },
  vacancyName: { type: String, required: true },
  city: { type: String, required: true },
  dateOfApplication: { type: Date, required: true },
  vacancyUrl: { type: String, required: true },
  coverletter: { type: Buffer, contentType: String, required: true }
})

module.exports = mongoose.model('applications', applicationSchema)
