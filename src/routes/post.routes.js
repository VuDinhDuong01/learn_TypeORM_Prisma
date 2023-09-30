const express = require('express');

const postController = require('../controllers/post.controllers');
const route=express.Router()

route.get('/posts',postController.getPost)
route.get('/posts/:id',postController.getOnePost)
route.post('/posts',postController.createPost)
route.delete('/posts/:id',postController.deletePost)
route.put('/posts/:id',postController.updatePost)

module.exports=route