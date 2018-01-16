const router = require('express').Router()
const { Application } = require('../models')

router.get('/applications', (req, res, next) => {
  Application.find()
    // Newest batches first
    .sort({ createdAt: -1 })
    // Send the data in JSON format
    .then((applications) => res.json(applications))
    // Throw a 500 error if something goes wrong
    .catch((error) => next(error))
  })

  .get('/applications/:id', (req, res, next) => {
      const id = req.params.id
      Application.findById(id)
        .then((result) => {
          if (!result) { return next() }
          res.json(result)
        })
        .catch((error) => next(error))
    })

  .post('/applications', (req, res, next) => {
    let newapplication = req.body

    Application.create(newapplication)
      .then((result) => res.json(result))
      .catch((error) => next(error))
  })
  .patch('/applications/:id', (req, res, next) => {
    Application.update({_id: req.params.id}, {...req.body})
    .then((application) => res.json(application))
    .catch((error) => next(error))
  })
  .delete('/applications/:id', (req, res, next) => {
    const id = req.params.id
    Application.remove({_id: req.params.id})
    .then((application) => res.json(application))
    .catch((error) => next(error))
  })

module.exports = router
