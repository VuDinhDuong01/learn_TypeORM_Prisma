const db = require('../models/db.config')

const userServices = {
    createUser: async ({ name, email, password }) => {
        const findUser = await db.user.findUnique({
            where: {
                email: email
            }
        })
        if (findUser) {
            return {
                message: "user alreadly taken"
            }
        }

        await db.user.create({
            data: {
                name: name,
                email: email,
                password: password
            }
        })
        return {
            message: "create new user successfully"
        }
    },
    getAllUsers: async () => {
        const response = await db.user.findMany({
            include: {
                post: {
                    select: {
                        title: true,
                        description: true
                    }
                },
                
            },
            orderBy:{
                id:"desc"
            }
            
        })
        return {
            message: "get all users successfully",
            data: response
        }
    },
    getUser: async (id) => {
        const response = await db.user.findFirst({
            where: {
                id: Number(id),
            },
            select: {
                post: {
                    select: {
                        title: true,
                        description: true
                    }
                },
                comment:{
                    select:{
                        post_id:true, 
                        comment:true
                    }
                }
            },
            orderBy:{
                id:"asc"
            }
            // select:{
            //     _count:{
            //         select:{
            //             comment:true,
            //             post:true
            //         }
            //     }
            // }
            
        })
        return {
            message: "get users successfully",
            data: response
        }
    },
    updateUser: async ({ id, name, password, email }) => {
        await db.user.update({
            where: {
                id: Number(id)
            },
            data: {
                name: name,
                password: password,
                email: email
            }
        })
        return {
            message: "update user successfully"
        }
    },
    deleteUser: async (id) => {
        await db.user.delete({
            where: {
                id: Number(id)
            }
        })
        return {
            message: "delete user successfully"
        }
    }
}
module.exports = userServices