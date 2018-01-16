const mongoose = require('../config/database')
const { Schema } = mongoose

const ApplicationSchema = new Schema({
  companyName: { type: String, required: true },
  vacancyName: { type: String, required: true },
  city: { type: String, required: true },
  dateOfApplication: { type: Date, required: true },
  vacancyUrl: { type: String, required: true },
  activity: { type: Boolean, default: true }
})

module.exports = mongoose.model('applications', ApplicationSchema)
