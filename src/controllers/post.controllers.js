const postServices = require("../services/post.services")

const postController = {
    createPost: async (req, res, next) => {
        try {
            const { user_id, title, description } = req.body
            const result = await postServices.createPost({ user_id, title, description })
            return res.json(result)
        } catch (err) {
            console.log(err)
        }
    },
    getOnePost: async (req, res, next) => {
        try {
            const { id } = req.params
            const result = await postServices.getOnePost(id)
            return res.json(result)
        } catch (err) {
            console.log(err)
        }
    },
    getPost: async (req, res, next) => {
        try {
            const {limit ,page}= req.body
            const response = await postServices.getPost({limit ,page})
            return res.json(response)
        } catch (err) {
            console.log(err)
        }
    },
    deletePost: async (req, res, next) => {
        try {
            const { id } = req.params
            const result = await postServices.deletePost(id)
            return res.json(result)
        }
        catch (err) {
            console.log(err)
        }
    },
    updatePost: async (req, res, next) => {
        try {
            const { id } = req.params
            const { id_user, title, description } = req.body
            const response = await postServices.updatePost({ id, id_user, title, description })
            return res.json(response)
        }
        catch (err) {
            console.log(err)
        }
    }
}
module.exports = postController