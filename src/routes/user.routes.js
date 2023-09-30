const express = require('express');
const userController = require('../controllers/user.controllers');
const route=express.Router() 

route.post('/auth/users',userController.createUser)
route.get('/auth/users',userController.getAllUser)
route.get('/auth/users/:id',userController.getUser)
route.put('/auth/users/:id',userController.updateUser)
route.delete('/auth/users/:id',userController.deleteUser)

module.exports=route