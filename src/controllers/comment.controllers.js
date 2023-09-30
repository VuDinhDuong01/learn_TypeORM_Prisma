const commentServices = require("../services/comment.services")


const commentController = {
    createComment: async (req, res, next) => {
        try {
            const { user_id, post_id, comment } = req.body
            const result = await commentServices.createComment({ user_id, post_id, comment })
            return res.json(result)
        } catch (err) {
            console.log(err)
        }
    },
    getOneComment: async (req, res, next) => {
        try {
            const { id } = req.params
            const result = await commentServices.getOneComment(id)
            return res.json(result)
        } catch (err) {
            console.log(err)
        }
    },
    getComment: async (req, res, next) => {
        try {
            const response = await commentServices.getComment()
            return res.json(response)
        } catch (err) {
            console.log(err)
        }
    },
    deleteComment: async (req, res, next) => {
        try {
            const { id } = req.params
            const result = await commentServices.deleteComment(id)
            return res.json(result)
        }
        catch (err) {
            console.log(err)
        }
    },
    updateComment: async (req, res, next) => {
        try {
            const { id } = req.params
            const { user_id, post_id, comment } = req.body
            const response = await commentServices.updateComment({ id, user_id, post_id, comment })
            return res.json(response)
        }
        catch (err) {
            console.log(err)
        }
    }
}
module.exports = commentController