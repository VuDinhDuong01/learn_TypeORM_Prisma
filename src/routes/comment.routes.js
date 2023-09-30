const express = require('express');
const commentController = require('../controllers/comment.controllers');


const route=express.Router()

route.get('/comments',commentController.getComment)
route.get('/comments/:id',commentController.getOneComment)
route.post('/comments',commentController.createComment)
route.delete('/comments/:id',commentController.deleteComment)
route.put('/comments/:id',commentController.updateComment)

module.exports=route