const db = require('../models/db.config')
const postServices = {
    createPost: async ({ user_id, title, description }) => {
        await db.post.create({
            data: {
                user_id: user_id,
                title: title,
                description: description
            }
        })
        return {
            message: "create post successfully"
        }
    },
    getPost: async ({ limit, page }) => {

        const response = await db.post.findMany({
            skip: Number(limit) * (Number(page) - 1),
            take: Number(limit),
            include: {
                user: {
                    select: {
                        name: true,
                        email: true
                    }
                },
                comment: true
            },

            // where: {
            //    title:{

            //         contains: 'hihi post',

            //    }
            // }

        })
        const total_item = await db.post.count()
        const total_page = Math.ceil(total_item / Number(limit))
        return {
            message: "get post successfully",
            data: response,
            total_page: total_page,
            total_item: total_item
        }
    },
    getOnePost: async (id) => {
        const response = await db.post.findFirst(
            {
                where: { id: Number(id) },
                include: {
                    comment: {
                        select: {
                            user_id: true,
                            comment: true
                        }

                    }
                }

            }
        )
        return {
            message: "get one post successfully",
            data: response
        }
    },
    updatePost: async ({ id, title, description, id_user }) => {
        await db.post.update({
            where: { id: Number(id) },
            data: { title: title, description: description, user_id: id_user }
        })
        return {
            message: "update post successfully",
        }

    },
    deletePost: async (id) => {
        await db.post.delete({ where: { id: Number(id) } })
        return {
            message: "delete post successfully",
        }
    }


}
module.exports = postServices