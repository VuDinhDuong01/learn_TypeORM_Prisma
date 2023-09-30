const db = require('../models/db.config')
const commentServices = {
    createComment: async ({ user_id, post_id, comment }) => {
         await db.comment.create({
            data: {
                user_id: user_id,
                comment: comment,
                post_id: post_id
            }
        })
        return {
            message: "create comment successfully"
        }
    },
    getComment: async () => {
        const response = await db.comment.findMany(
        //     {
        //     include:{
        //         user:{
        //             select:{
        //                 name:true,
        //                 email:true
        //             }
        //         }
        //     }

        // }
        )
        return {
            message: "get comment successfully",
            data: response
        }
    },
    getOneComment: async (id) => {
        const response = await db.comment.findUnique({
            where: { id: Number(id )}
        })
        return {
            message: "get one comment successfully",
            data: response
        }
    },
    updateComment: async ({ id, user_id,post_id, comment }) => {
         await db.comment.update({
            where:{ id: Number(id )},
            data: { comment: comment, post_id: post_id, user_id: user_id }
        })
        return {
            message: "update comment successfully",
        }

    },
    deleteComment: async (id) => {
     await db.comment.delete({ where:{ id: id } })
        return {
            message: "delete comment successfully",
        }
    }


}
module.exports = commentServices