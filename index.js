const express = require('express')
const { Application } = require('./models')

const PORT = process.env.PORT || 3030

let app = express()

app.get('/applications', (req, res, next) => {
  Application.find()
      // Newest recipes first
      .sort({ createdAt: -1 })
      // Send the data in JSON format
      .then((applications) => res.json(applications))
      // Forward any errors to error handler
      .catch((error) => next(error))
  })

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
