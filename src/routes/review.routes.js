const {Router} = require('express')
const reviewController = require('../controllers/review.controllers')

const route= Router()
route.get('/allreviews',reviewController.getAllReviews)
route.get('/reviews',reviewController.getReviews)
route.post('/reviews',reviewController.createReview)
module.exports =route