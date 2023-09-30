const express = require('express');
const restaurantController= require('../controllers/restaurant.controllers')
const route=express.Router()

route.get('/restaurants',restaurantController.getRestaurant)
route.get('/restaurants/:id',restaurantController.getOneRestaurant)
route.post('/restaurants',restaurantController.createRestaurant)
route.delete('/restaurants/:id',restaurantController.deleteRestaurant)
route.put('/restaurants/:id',restaurantController.updateRestaurant)

module.exports=route